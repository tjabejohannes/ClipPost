/**
 * Created by LittleGpNator on 14/06/2017.
 */
// In renderer process (web page).
const { remote } = require('electron');
const {ipcRenderer} = require('electron');
let modal;

/*ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
});*/

function showModal() {
    modal = new remote.BrowserWindow({
        parent: remote.getCurrentWindow(),
        modal: true,
        height: 120,
        width: 450,
        resizable: false,
        backgroundColor: '#c4dfe6',
        frame: false
    });

    var theUrl = 'file://' + __dirname + '/modal.html'
    modal.loadURL(theUrl);
}


function hideModal() {
    remote.getCurrentWindow().hide();
}


function sendASync() {
    ipcRenderer.send('asynchronous-message-from-modal','Modal sending Async to clear table!');
    hideModal();
}