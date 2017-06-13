/**
 * Created by LittleGpNator on 08/06/2017.
 */



function addLine(value) {
    $('#Column').append('<div class ="box"><input type="text" id="input" class="inputField" value="'+value+'"><button class="btn">Clip </button> </div>');
};

function addNewEmptyline() {
    $('#Column').append('<div class ="box"><input type="text" id="input" class="inputField"><button class="btn">Clip </button> </div>');
    var objDiv = document.getElementById("Column");
    objDiv.scrollTop = objDiv.scrollHeight;
};

function addSavedLines(){
    stringArray = retrieve();
    for (i = 0; i<stringArray.length; i++){
        addLine(stringArray[i]);
    }
}



//Deactivates the pinch and zoom on mac
/*
document.addEventListener('mousewheel', function(e) {
    if(e.deltaY % 1 !== 0) {
        e.preventDefault();
    }
});

document.addEventListener('mousewheel', function(e) {
    if(e.ctrlKey) {
        e.preventDefault();
    }
});*/