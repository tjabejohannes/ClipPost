/**
 * Created by LittleGpNator on 08/06/2017.
 */


const path = require('path');
const Store = require('../back/store.js');


function save() {
    let input = document.getElementById("input").value;
    store.set('input', {input});
}


// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences',
    defaults: {
        input: { input: "input"}
    }
});