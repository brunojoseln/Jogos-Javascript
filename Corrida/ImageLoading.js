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
    //imgVar.src = fileName;
}

function loadImages(){
    var dataSet = {varName: carPic, theFile: "carro.png"};

    var imageList = [
        {varName: carPic, theFile: "https://github.com/brunojoseln/Jogos-Javascript/blob/master/Corrida/carro.png"},
        {varName: roadPic, theFile: "https://github.com/brunojoseln/Jogos-Javascript/blob/master/Corrida/track_road.png"},
        {varName: wallPic, theFile: "https://github.com/brunojoseln/Jogos-Javascript/blob/master/Corrida/track_wall.png"}
    ];

    picsToLoad = imageList.length;

    for(var i=0; i< imageList.length; i++){
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
}
