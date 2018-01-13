#!/bin/sh

docker build --tag exedealer-geojson-vt-issue . \
 && docker run -it --rm exedealer-geojson-vt-issue 