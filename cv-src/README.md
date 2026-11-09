# Hanfei Yu CV source

This directory contains the LaTeX source previously maintained in Overleaf.

The only local prerequisite is a TeX installation that provides `latexmk` and
`pdflatex` (for example, MacTeX on macOS).

From the repository root, build the CV with the standalone script:

```sh
./cv-src/build.sh
```

On systems with a working `make`, `make cv` is a convenience wrapper for the
same script.

The build uses `latexmk` and writes the website-ready PDF to
`assets/pdf/Resume_Hanfei_Yu.pdf`. Temporary LaTeX files stay under
`cv-src/build/` and are ignored by Git.

The PDF includes a dated REEF GitHub star-count snapshot. With Python 3.9+,
each build refreshes `reef-stats.tex` from GitHub's public API (no token or extra
packages needed). If GitHub is unavailable or rate-limited, the build keeps the
last saved count and its original date. Without Python, the saved snapshot is used.

To build without contacting GitHub:

```sh
CV_OFFLINE=1 ./cv-src/build.sh
```

The website's Projects card and CV entry instead use a live
[Shields.io star badge](https://shields.io/badges/git-hub-repo-stars), configured by
their `github_stars` fields. The badge updates independently of site deployments
when pages load, subject to Shields.io and browser caching. Downloaded PDFs do not
update themselves; rebuild the CV to refresh its snapshot.

## Finalizing a CV

When Hanfei approves a new CV for release, update the existing **Resume Hanfei Yu**
Overleaf project from the same revision that produced the website PDF. Use the
Overleaf Tools Git project alias `hanfei-cv`. Preview builds and website-only
changes do not trigger a sync.

Compare the project's root files with `Resume_for_Hanfei.tex`, `resume.cls`,
`reef-stats.tex`, and `publications.bib` in this directory. Include any new
LaTeX dependencies. Reconcile edits made independently on Overleaf before pushing.
Import changed files at the project root, dependencies first, using the tool's
revision and file-hash checks. After the push, fetch the remote files again and
verify that their contents match the finalized sources. Record the website and
Overleaf Git revisions when reporting the release.
