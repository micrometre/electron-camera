const {app, BrowserWindow} = require('electron');
const path = require('node:path')
let mainWindow;
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600, 
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')

    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
try {
  require('electron-reloader')(module)
} catch (_) {}