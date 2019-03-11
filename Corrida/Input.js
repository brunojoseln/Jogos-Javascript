const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40 ;
const KEY_RIGHT_ARROW = 39;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;


var mouseX = 0;
var mouseY = 0;

function setupInput(){
    canvas.addEventListener("mousemove",updateMousePosition);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyRealeased);

}

function updateMousePosition(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;

        // cheat / hack to test ball in any position
        /*carX = mouseX;
        carY = mouseY;
        carSpeedX = 4;
        carSpeedY = -4;*/
}

function keyPressed(evt){
    console.log(evt.keyCode)
    if(evt.keyCode == KEY_LEFT_ARROW){
        keyHeld_TurnLeft = true;
    }
    if(evt.keyCode == KEY_RIGHT_ARROW){
        keyHeld_TurnRight = true;
    }
    if(evt.keyCode == KEY_UP_ARROW){
        keyHeld_Gas = true;
    }
    if(evt.keyCode == KEY_DOWN_ARROW){
        keyHeld_Reverse = true;
    }

}

function keyRealeased(evt){
    if(evt.keyCode == KEY_LEFT_ARROW){
        keyHeld_TurnLeft = false;
    }
    if(evt.keyCode == KEY_RIGHT_ARROW){
        keyHeld_TurnRight = false;
    }
    if(evt.keyCode == KEY_UP_ARROW){
        keyHeld_Gas = false;
    }
    if(evt.keyCode == KEY_DOWN_ARROW){
        keyHeld_Reverse = false;
    }
}
