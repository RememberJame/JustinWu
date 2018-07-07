const {app, BrowserWindow} = require('electron');

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});

    win.loadFile('index.html');

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

    app.on('ready', createWindow);
}

function buttonHandler() {
    console.log("HELLO");
}

app.on('ready', createWindow);