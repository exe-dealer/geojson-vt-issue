const fs = require('fs');
const vtpbf = require('vt-pbf');
const vt2geojson = require('vt2geojson');

const buff = Buffer.from(vtpbf.fromGeojsonVt({
  somelayer: {
    features: [
      {
        "geometry": [
          [
              [0,0],
              [10, 0],
              [10,10],
              [0, 10],
              [0,0]
          ],
          [
              [2,2],
              [4,2],
              [4,4],
              [2,4],
              [2,2]
          ]
        ],
        "type": 3
      }
    ]
  }
}, { version: 2 }));


fs.writeFileSync('/tmp/badvt', buff);

vt2geojson({
  uri: '/tmp/badvt',
  z: 0,
  x: 0,
  y: 0,
}, console.log)

