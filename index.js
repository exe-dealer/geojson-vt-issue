const vtpbf = require('vt-pbf');
const fs = require('fs');
const vt2geojson = require('vt2geojson');


const buff = Buffer.from(vtpbf.fromGeojsonVt({
  somelayer: {
    features: [
      {
        "geometry": [
          [
            [0,0],
            [0,10],
            [10, 10],
            [10, 0],
            [0,0]
          ],
          [[2,2], [4,4], [2,2]]
        ],
        "type": 3
      }
    ]
  }
}));


fs.writeFileSync('/tmp/badvt', buff);

vt2geojson({
  uri: '/tmp/badvt',
  z: 0,
  x: 0,
  y: 0,
}, console.log)

