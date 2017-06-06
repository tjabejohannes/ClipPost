/**
 * Created by LittleGpNator on 06/06/2017.
 */


function addNewClipboardlink() {
    console.log("hallo");
    $('#Column').append('<div class="Box"><div class="RightColumn"><button class="edit">Edit</button><div class="addtoclipboard" id="addtoclipboardButton"><button class="add">Add</button></div></div><div class="LeftColumn"> The Name </div></div>');
};

$( document ).ready(function() {
    new Clipboard('.btn');
    console.log( "ready!" );
});


