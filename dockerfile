FROM node:9.3-alpine
WORKDIR /app
RUN apk add --update --no-cache git \
 && npm i vt2geojson vt-pbf
CMD node index.js
COPY index.js ./