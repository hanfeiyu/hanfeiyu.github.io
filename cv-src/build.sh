#!/usr/bin/env bash

set -euo pipefail

cv_source_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cv_repo_root="$(cd -- "${cv_source_dir}/.." && pwd)"
cv_build_dir="${cv_source_dir}/build"
cv_output_dir="${cv_repo_root}/assets/pdf"

mkdir -p "${cv_build_dir}" "${cv_output_dir}"

cd "${cv_source_dir}"
latexmk \
  -pdf \
  -interaction=nonstopmode \
  -halt-on-error \
  -outdir=build \
  Resume_for_Hanfei.tex

cp \
  "${cv_build_dir}/Resume_for_Hanfei.pdf" \
  "${cv_output_dir}/Resume_Hanfei_Yu.pdf"

printf 'Built %s\n' "${cv_output_dir}/Resume_Hanfei_Yu.pdf"
