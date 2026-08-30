.PHONY: cv clean-cv

cv:
	./cv-src/build.sh

clean-cv:
	cd cv-src && latexmk -C -outdir=build Resume_for_Hanfei.tex
