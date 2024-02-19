
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    document.getElementById('camera').srcObject = stream;
    cameraFunction(stream);
    console.log(stream)
  }).catch(function () {
    alert('could not connect stream');
  });






    chunks = []
function cameraFunction(stream) {
  startRecord = () => {
    const options = { mimeType: 'video/webm; codecs=vp9' };
    const clipName = "clip";
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.start();
  };
  stopRecord = () => {
    mediaRecorder.stop()
    mediaRecorder.onstop = (e) => {
    }
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };
      console.log(chunks)

  };
}

