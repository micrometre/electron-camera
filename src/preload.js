const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '.']);
    
    for (const dependency of ['chrome', 'node', 'electron']) {
      console.log((`${dependency}-version`, process.versions[dependency]))
    }
    navigator.mediaDevices.getUserMedia({video: true})
    .then(function(stream) {
      document.getElementById('camera').srcObject = stream;
    }).catch(function() {
      alert('could not connect stream');
    });
  

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    