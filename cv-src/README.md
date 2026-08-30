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
