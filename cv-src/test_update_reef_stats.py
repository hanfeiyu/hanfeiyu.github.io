"""Offline checks for the CV's GitHub star-count updater."""

from datetime import date, datetime
from io import StringIO
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from urllib.error import URLError
from zoneinfo import ZoneInfo

import update_reef_stats as stats


class ReefStatsTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.snapshot = Path(self.directory.name) / "reef-stats.tex"
        self.original = stats.render_snapshot(7701, date(2026, 10, 20))
        self.snapshot.write_text(self.original, encoding="utf-8")

    def test_compact_count_format(self):
        for count, expected in ((0, "0"), (999, "999"), (1000, "1K"), (7702, "7.7K"), (7751, "7.8K"), (10000, "10K")):
            with self.subTest(count=count):
                self.assertEqual(stats.format_count(count), expected)

    def test_snapshot_retains_exact_count_with_compact_display(self):
        snapshot = stats.render_snapshot(7702, date(2026, 10, 20))
        self.assertIn(r"\newcommand{\ReefGitHubStars}{7,702}", snapshot)
        self.assertIn(r"\newcommand{\ReefGitHubStarsCompact}{7.7K}", snapshot)

    def test_refresh_updates_count_and_date(self):
        checked_at = datetime(2026, 10, 21, tzinfo=ZoneInfo("America/Los_Angeles"))
        with patch.object(stats, "fetch_count", return_value=7800), patch.object(stats, "datetime") as clock:
            clock.now.return_value = checked_at
            stats.refresh_snapshot(self.snapshot)
        self.assertEqual(self.snapshot.read_text(), stats.render_snapshot(7800, date(2026, 10, 21)))

    def test_offline_does_not_contact_github(self):
        with patch.object(stats, "fetch_count") as fetch:
            stats.refresh_snapshot(self.snapshot, offline=True)
        fetch.assert_not_called()
        self.assertEqual(self.snapshot.read_text(), self.original)

    def test_failed_refresh_preserves_count_and_original_date(self):
        for error in (URLError("offline"), TimeoutError("timeout"), ValueError("invalid response")):
            with self.subTest(error=error), patch.object(stats, "fetch_count", side_effect=error):
                stats.refresh_snapshot(self.snapshot)
            self.assertEqual(self.snapshot.read_text(), self.original)

    def test_no_cache_and_failed_fetch_is_an_error(self):
        with patch.object(stats, "fetch_count", side_effect=URLError("offline")):
            with self.assertRaises(FileNotFoundError):
                stats.refresh_snapshot(Path(self.directory.name) / "missing.tex")

    def test_invalid_cache_is_rejected(self):
        self.snapshot.write_text(self.original.replace("7,701", "invalid"))
        with self.assertRaises(ValueError):
            stats.refresh_snapshot(self.snapshot, offline=True)

    def test_unchanged_snapshot_is_not_rewritten(self):
        checked_at = datetime(2026, 10, 20, tzinfo=ZoneInfo("America/Los_Angeles"))
        before = self.snapshot.stat().st_mtime_ns
        with patch.object(stats, "fetch_count", return_value=7701), patch.object(stats, "datetime") as clock:
            clock.now.return_value = checked_at
            stats.refresh_snapshot(self.snapshot)
        self.assertEqual(self.snapshot.stat().st_mtime_ns, before)

    def test_fetch_accepts_zero_and_positive_counts(self):
        for count in (0, 7701):
            response = StringIO(json.dumps({"full_name": stats.REPOSITORY, "stargazers_count": count}))
            with self.subTest(count=count), patch.object(stats, "urlopen", return_value=response):
                self.assertEqual(stats.fetch_count(), count)

    def test_fetch_rejects_bad_counts_and_other_repositories(self):
        payloads = [
            {"full_name": stats.REPOSITORY, "stargazers_count": count}
            for count in (-1, True, "7701", None)
        ] + [{"full_name": "another/repo", "stargazers_count": 7701}, []]
        for payload in payloads:
            with self.subTest(payload=payload), patch.object(stats, "urlopen", return_value=StringIO(json.dumps(payload))):
                with self.assertRaises(ValueError):
                    stats.fetch_count()


if __name__ == "__main__":
    unittest.main()
