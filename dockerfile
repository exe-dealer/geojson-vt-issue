FROM node:9.3-alpine
WORKDIR /app
RUN apk add --update --no-cache git
RUN npm i \
    vt2geojson \
    vt-pbf \
    geojson-vt@3.0.0
CMD node index.js
COPY index.js ./