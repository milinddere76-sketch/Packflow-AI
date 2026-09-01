const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 820,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    }
  });

  const localHostUrl = 'http://localhost:3000';
  const indexFileUrl = `file://${path.join(__dirname, 'index.html')}`;

  // Try loading local dev server first, fallback to bundled file
  win.loadURL(localHostUrl).catch(() => {
    win.loadURL(indexFileUrl);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
