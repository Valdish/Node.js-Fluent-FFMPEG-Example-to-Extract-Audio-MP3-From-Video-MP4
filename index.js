const ffmpeg = require('fluent-ffmpeg');

const args = process.argv.slice(2);

function baseName(filename) {
    let base = new String(filename).substring(filename.lastIndexOf('/') + 1)
    if(base.lastIndexOf('.') != -1) {
        base = base.substring(0, base.lastIndexOf('.'))
    }

    return base;
}




args.forEach(function(val, index, array){

  let filename = val
  console.log(filename)

  let basename = baseName(filename)
  console.log(basename)

  ffmpeg(filename)
  .toFormat("mp3")
  .saveToFile("audio.mp3", (stdout, stderr) => {
  })
  .on("error", (function(err) {
    console.log(err)
  }))
  .on("progress", function(progress){
    console.log("... frames " + progress.frames)
  })
  .on("end", function(){
    console.log("finished processing")
  })
  .run()
})



