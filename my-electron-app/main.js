const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow () {
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
    show: false,
    icon: __dirname + '/decoration/illustration/switch.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  win.maximize();
  win.show();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
