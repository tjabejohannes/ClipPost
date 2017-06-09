/**
 * Created by LittleGpNator on 08/06/2017.
 */


//const path = require('path');
const Store = require('../back/store.js');


function save() {
    var all = document.getElementsByClassName('inputstyle');
    console.log(all);
    write(all);
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
    var empty = {};
    write(empty);
    $("div").remove(".box");
}


// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences',
    defaults: {
        input: {input: "input"}
    }
});