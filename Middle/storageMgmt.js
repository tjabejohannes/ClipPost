/**
 * Created by LittleGpNator on 08/06/2017.
 */

//const path = require('path');
const Store = require('../back/store.js');

const { remote } = require('electron');

let modal;
var autosave=false;

function showModal() {
    modal = new remote.BrowserWindow({
        parent: remote.getCurrentWindow(),
        modal: true,
        height: 120,
        width: 450,
        backgroundColor: '#c4dfe6'
    });

    var theUrl = 'file://' + __dirname + '/modal.html'
    modal.loadURL(theUrl);
}

function hideModal() {
    remote.getCurrentWindow().hide();
}

function save() {
    var all = document.getElementsByClassName('inputField');
    write(all);
}

function autoSave() {
    if (autosave===true){
        save()
    }
}

function cleanFile() {
    store.set('input',{"0":{input: ""}});
}

function write(all) {
    var values = {};

    for (i = 0; i < all.length; i++) {
        values[i] = {input: all[i].value};
    }
    store.set('input', values);
}

function retrieve() {
    obj = store.get('input');
    values = [];
    var array = Object.values(obj);
    var stringArray = [array.length];

    for (i = 0; i < array.length; i++) {
        stringArray[i] = array[i].input;
    }
    return stringArray
}



function clearAll() {
    //The following Jquary does not work on another file.
    $("div").remove(".box");

    cleanFile()
    hideModal();
}


// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences',
    defaults: {
        input: {input: "input"}
    }
});

function setAutoSave() {
    if (autosave){
        autosave=false;
    }else{
        autosave=true;
    }
    console.log(autosave);
}
