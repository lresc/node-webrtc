var nodeshout = require('../'),
    fs = require('fs'),
request = require('request');

nodeshout.init();

console.log('Libshout version: ' + nodeshout.getVersion());

// Create instance and configure it.
var shout = nodeshout.create();
shout.setHost('localhost');
shout.setPort(8000);
shout.setUser('source');
shout.setPassword('sourcepass');
shout.setMount('deneme');
shout.setFormat(1); // 0=ogg, 1=mp3
shout.setAudioInfo('bitrate', '192');
shout.setAudioInfo('samplerate', '44100');
shout.setAudioInfo('channels', '2');

shout.open();
console.log("1"+request);
request.get("http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", function (error, response, body){
console.log("jelo");
	if(!error && response.statusCode ==200){
		var csv = body;
		console.log("body" + response);
		//continue with your processing here
	}else
		console.log("error" + response.statusCode);
settimeout(function(){
console.log("ya está");
},200000000);
});


//http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
// Don't forget to replace mp3 file path.
/*fs.open("./", 'r', function(status, fd) {
console.log("1" +fd);
    if (status) {
        console.log("status" + status.message);
        return;
    }
console.log("2");
    fs.fstat(fd, function(err, stats) {
        var fileSize = stats.size,
            bufferSize = fileSize,
            chunkSize = 4096,
            buffer = new Buffer(bufferSize),
            bytesRead = 0;

        console.log('Got file stats, file size: ' + fileSize);
        while (bytesRead < fileSize) {
            if ((bytesRead + chunkSize) > fileSize) {
                chunkSize = (fileSize - bytesRead);
            }

            var num = 0;
            try {
                num = fs.readSync(fd, buffer, 0, chunkSize, bytesRead);                    
            } catch(e) {
                console.log(e);
                debugger;
            }

            bytesRead += num;
            console.log('Bytes read:' + bytesRead + ' Total:' + fileSize);

            if (num > 0) {
                shout.send(buffer, num);
            }
            else {
                console.log('Zero bytes read, aborting');
                break;
            }

            shout.sync();
        }

        fs.close(fd);
        shout.close();
    });
});*/
