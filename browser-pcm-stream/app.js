var express = require("express");
var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var wav = require('wav');
var vorbis = require('vorbis');
var ogg = require('ogg');

var port = 3700;
var app = express();
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'))




var oe = new ogg.Encoder();
var ve = new vorbis.Encoder();

// not yet implemented...
//ve.addComment('ARTIST', 'Bob Marley');





app.get("/", function(req, res){
  res.render("index");
});

app.listen(port);

binaryServer = BinaryServer({port: 9001});

binaryServer.on('connection', function(client) {
  console.log("new connection");

  var fileWriter = new wav.FileWriter('demo2.wav', {
    channels: 1,
    sampleRate: 48000,
    bitDepth: 16
  });

  client.on('stream', function(stream, meta) {
    console.log('new stream ' +stream );
    // `process.stdin` *MUST* be PCM float 32-bit signed little-endian samples.
    // channels and sample rate are configurable but default to 2 and 44,100hz.
    stream.pipe(ve);
  //  console.log("vorbis "+ve);
   // console.log("ogg 0 "+oe.stream());

    // send the encoded Vorbis pages to the Ogg encoder
  // ve.pipe(process.stdout);
    ve.pipe(oe.stream());
    //
   // console.log("ogg 1 "+oe);

    // write the produced Ogg file with Vorbis audio to `process.stdout`
    oe.pipe(process.stdout);

   // process.stdout.pipe(fileWriter);

    stream.on('end', function() {
      //fileWriter.end();
    });
  });
});
