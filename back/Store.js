/**
 * Created by LittleGpNator on 07/06/2017.
 */


const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {
    constructor(opts) {
        // Renderer process has to get `app` module via `remote`, whereas the main process can get it directly
        // app.getPath('userData') will return a string of the user's app data directory path.
        const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        // We'll use the `configName` property to set the file name and path.join to bring it all together as a string
        this.path = path.join(userDataPath, 'Storage.json');
        console.log("The data is saved in following path: " + userDataPath);
        this.data = parseDataFile(this.path, opts.defaults);
    }

    // This will just return the property on the `data` object
    get(key) {
        try{
            console.log("read from file");
            return this.data[key];
        }catch (error){
            console.log("Error while trying to fetch data from file.")
        }
    }

    // Overwrites the entire file:
    set(key, val) {
        this.data[key] = val;

        try {
            fs.writeFileSync(this.path, JSON.stringify(this.data));
            console.log('Saved!');
        } catch (error) {
            console.log(error);
        }
    }

    //Does not overwrite: (append)
    add(key, val) {
        this.data[key] = val;

        try {
            //Asynchronously:
            fs.appendFile(this.path, JSON.stringify(this.data), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });

            /*
             //The Synchronously couonterpart:
             fs.appendFileSync('message.txt', 'data to append');
             */
        } catch (error) {
            console.log(error);
        }
    }
}

function parseDataFile(filePath, defaults) {
    // We'll try/catch it in case the file doesn't exist yet, which will be the case on the first application run.
    // `fs.readFileSync` will return a JSON string which we then parse into a Javascript object
    try {
        return JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        // if there was some kind of error, return the passed in defaults instead.
        console.log("Setting default since no exciting jason object.");
        return defaults;
    }
}

// expose the class
module.exports = Store;