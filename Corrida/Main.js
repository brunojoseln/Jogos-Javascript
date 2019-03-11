var canvas, canvasContext;

window.onload = function(){
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext('2d');

    colorRect(0,0,canvas.width, canvas.height, '#007FFF');
    colorText("Loading Images...", canvas.width/4, canvas.height/2,'white','50');

    loadImages();
}

function imageLoadingDone(){
    var framesPerSecond = 60;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    carReset();
}

function updateAll(){
    drawAll();
    moveAll();
}


function moveAll(){
    carMove();
    carTrackHandling()
}

function drawAll(){
    drawTracks();
    carDraw();

}