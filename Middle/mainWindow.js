/**
 * Created by LittleGpNator on 14/06/2017.
 */

ipcRenderer.send('asynchronous-message-from-mainWindow', 'Main window Connected to render!');

ipcRenderer.on('asynchronous-reply-to-main-window', (event, arg) => {
    console.log(arg); // prints "pong"
    clearAll();
})