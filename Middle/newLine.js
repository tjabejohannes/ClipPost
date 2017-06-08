/**
 * Created by LittleGpNator on 08/06/2017.
 */



function addLine(value) {
    $('#Column').append('<div class ="box"><input id="input" class="inputstyle" value='+value+'><button class="btn">Clip </button> </div>');
};

function addNewEmptyline() {
    $('#Column').append('<div class ="box"><input id="input" class="inputstyle"><button class="btn">Clip </button> </div>');
};

function addSavedLines(){
    stringArray = retrieve();
    for (i = 0; i<stringArray.length; i++){
        addLine(stringArray[i]);
    }
}