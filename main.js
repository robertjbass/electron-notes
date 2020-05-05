const { app, BrowserWindow } = require("electron");

app
  .whenReady()
  .then(() => {
    // Create a window
    const mainWindow = new BrowserWindow({
      backgroundColor: "#2e2c29",
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    // Load a webpage
    mainWindow.loadFile("index.html");
  })
  .then(() => {
    const contextMenu = Menu.buildFromTemplate([
      { label: "Cool", type: "radio" }
    ]);
    const tray = new Tray("/my-icon");
    tray.setToolTip("Electron ToolTip!");
  });
