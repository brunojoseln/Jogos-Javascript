

var carAng = 0;
var carX = 50;
var carY = 50;
var carSpeed = 0;

const GROUNDSPEEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.2;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.04;

function carReset(){
    for (var eachRow=0;eachRow < TRACK_ROWS;eachRow++){
        for(var eachCol=0; eachCol< TRACK_COLS; eachCol++){
            var arrayIndex = TRACK_COLS * eachRow + eachCol;
            if(trackGrid[arrayIndex] == TRACK_PLAYERSTART){
                trackGrid[arrayIndex] = TRACK_ROAD;
                carAng = -90 * Math.PI/180.0;
                carX = eachCol * TRACK_W + TRACK_W/2;
                carY = eachRow * TRACK_H + TRACK_H/2;

            }
        }
    }
}


function carMove(){
    carSpeed *= 0.97;

    if(keyHeld_Gas){
        carSpeed += DRIVE_POWER;
    }
    if(keyHeld_Reverse){
        carSpeed -= REVERSE_POWER;
    }
    if(keyHeld_TurnLeft){
        carAng -= TURN_RATE;
    }
    if(keyHeld_TurnRight){
        carAng += TURN_RATE;
    }

    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
    
    //carAng += 0.09; 

};

function carDraw(){
    drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
}






//imageLoading

var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 0; //ser automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady(){
    picsToLoad--;
    console.log(picsToLoad);
    if (picsToLoad == 0){
        imageLoadingDone();
    }
}

function beginLoadingImage(imgVar,fileName){
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = fileName;
}

function loadImages(){
    var dataSet = {varName: carPic, theFile: "carro.png"};

    var imageList = [
        {varName: carPic, theFile: "https://raw.githubusercontent.com/brunojoseln/Jogos-Javascript/master/Corrida/carro.png"},
        {varName: roadPic, theFile: "https://raw.githubusercontent.com/brunojoseln/Jogos-Javascript/master/Corrida/track_road.png"},
        {varName: wallPic, theFile: "https://raw.githubusercontent.com/brunojoseln/Jogos-Javascript/master/Corrida/track_wall.png"}
    ];


    picsToLoad = imageList.length;

    for(var i=0; i< imageList.length; i++){
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
}
