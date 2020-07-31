"use strict";

import { app, protocol, BrowserWindow } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true //process.env.ELECTRON_NODE_INTEGRATION
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

const escpos = require("escpos");
escpos.USB = require("escpos-usb");
const { ipcMain } = require("electron");

ipcMain.on("print", (event, arg) => {
  // console.log(arg) // receive data from arg
  print(arg);
});
const print = arg => {
  setTimeout(() => {
    console.log("test print start", arg);
    console.log(escpos.USB.findPrinter());

    // Select the adapter based on your printer type
    // const device = new escpos.USB("0x0fe6", "0x811e");
    // const device  = new escpos.Network('localhost');
    // const device  = new escpos.Serial('/dev/usb/lp0');

    // const options = { encoding: "GB18030" /* default */ };
    // encoding is optional

    //   const printer = new escpos.Printer(device, options);

    //   device.open(function() {
    //     printer
    //       .font("a")
    //       .align("ct")
    //       .style("bu")
    //       .size(1, 1)
    //       .text(arg)
    //       .size(0.001, 0.001)
    //       .tableCustom(
    //         [
    //           {
    //             text: "Apple                         200",
    //             align: "LEFT",
    //             width: 0.5
    //           },
    //           {
    //             text: "Orange                        200",
    //             align: "LEFT",
    //             width: 0.5
    //           }
    //         ],
    //         { encoding: "cp857", size: [2, 1] } // Optional
    //       )
    //       .qrimage("https://github.com/song940/node-escpos", function(err) {
    //         console.log(err);
    //         this.cut();
    //         this.close();
    //       })
    //       .text("Thanks YOU!");
    //   });

    //   console.log("test print end");
  }, 1000);
};
