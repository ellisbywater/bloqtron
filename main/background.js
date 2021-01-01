import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import * as Store from 'electron-store';
import { createWindow } from './helpers';
import {createToken, createWallet, sendToken} from "./slp";
import {error} from "next/dist/build/output/log";

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

const walletBalances = [
  {
    address: "je03r203jf228rjfeuhdngjralq038n",
    balance: "01.0020334"
  },
  {
    address: "je000plxx228rjfw12kdxw3mmv0573",
    balance: "01.022222"
  },
  {
    address: "je03wY52okkeu1xsed677sgjr12t1t",
    balance: "00.0008116"
  }
]

ipcMain.on('get-balances', (event, args) => {
  event.returnValue = walletBalances
});

ipcMain.on('create-token', (event, args) => {
  const {walletName, tokenName, ticker, decimals, initialQty, documentUrl, documentHash } = args
  let response
  try {
     response = createToken(walletName, tokenName, ticker, decimals, initialQty, documentUrl, documentHash)
  } catch (e) {
    response = e
  }
  event.sender.send = response

})

ipcMain.handle('create-wallet', (event, args) => {
  const walletName = args
  console.log("all args:    ", args)
  if(walletName === undefined) throw error("walletName undefined")
  console.log("wallet name before createWallet:   ", walletName)

  let response
  try {
    response = createWallet(walletName)
  } catch (e) {
    response = e
  }
  return response
})

ipcMain.on('send-token', (event, args) => {
  const { fromAddress, toAddress, amount} = args
  let response
  try {
    response = sendToken(fromAddress, toAddress, amount)
  } catch (e) {
    response = e
  }
  event.sender.send = response
})
