var sharp = require('sharp');

var params = {
  inputPath: IN.inputPath,
  width: IN.width,
  heigth: IN.height,
  outputPath: IN.outputPath
}

function sharpImage(params) {
  sharp(params.inputPath).resize(params.width,params.height)
  .toFile(params.outputPath,function (err,info) {
    if(err) {
      console.log(err);
      sendOUT({isSuccess: false});
    }
    if(info) {
      console.log(info);
      sendOUT({isSuccess: true});
    }
  });
}

sharpImage(params);
