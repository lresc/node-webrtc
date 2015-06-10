


var binaryServer = require('binaryjs').BinaryServer;
var wav = require('wav');

var server = binaryServer({port: 9001});

server.on('connection', function(client) {
	  var fileWriter = null;
		console.log("on connection");


	client.on('stream', function(stream, meta) {
		
		console.log("on stream");
	  var fileWriter = new wav.FileWriter('demo.wav', {
	    channels: 1,
	    sampleRate: 48000,
	    bitDepth: 16
	  });
	  stream.pipe(fileWriter);
	  stream.on('end', function() {
	  		console.log("end");
	    fileWriter.end();
	  });
	});

	client.on('close', function() {
		console.log("close");
	  if (fileWriter != null) {
	  	console.log("fileWriter!=null");
	    fileWriter.end();
	  }
	});
});

