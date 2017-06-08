/**
 * Created by LittleGpNator on 08/06/2017.
 */


//const path = require('path');
const Store = require('../back/store.js');


function save() {
    var all = document.getElementsByClassName('inputstyle');
    var values = {};

    for(i = 0; i < all.length; i++){
        values[i] = {input: all[i].value};
    }
    console.log(values)
    store.set('input', values);
}

function retrieve(){
    text = store.get('input');
    console.log(text);
}


// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences',
    defaults: {
        input: { input: "input"}
    }
});