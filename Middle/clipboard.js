/**
 * Created by LittleGpNator on 06/06/2017.
 */

$( document ).ready(function() {
    var clipboard = new Clipboard('.btn');


    clipboard.on('success', function(e) {
        //console.info('Action:', e.action);
        console.info('Text:', e.text);
        //console.info('Trigger:', e.trigger);

        e.clearSelection();
    });


    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

});




//<div class="Box"><div class="RightColumn"><button class="edit">Edit</button><div class="addtoclipboard" id="addtoclipboardButton"><button class="add">Add</button></div></div><input id="nameinput"> </div></div>