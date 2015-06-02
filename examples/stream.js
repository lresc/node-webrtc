var session = {
  audio: true,
  video: false
};

navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

if(navigator.getUserMedia)                       
	navigator.getUserMedia(session, initializeRecorder, onError);


function initializeRecorder(stream) {
  var audioContext = window.AudioContext;
  var context = new audioContext();
  var audioInput = context.createMediaStreamSource(stream);
  var bufferSize = 2048;
  // create a javascript node
  var recorder = context.createScriptProcessor(bufferSize, 1, 1);
  // specify the processing function
  recorder.onaudioprocess = recorderProcess;
  // connect stream to our recorder
  audioInput.connect(recorder);
  // connect our recorder to the previous destination
  recorder.connect(context.destination);
}

function recorderProcess(e){
	//Now we have PCM data samples from the left channel.
	var left = e.inputBuffer.getChannelData(0);
}

function onError(e){
	console.log("Error: " + e);
}