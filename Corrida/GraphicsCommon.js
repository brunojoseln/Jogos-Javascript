function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng){
canvasContext.save();
canvasContext.translate(atX, atY);
canvasContext.rotate(withAng);
canvasContext.drawImage(useBitmap, - useBitmap.width/2, -useBitmap.height/2);
canvasContext.restore();
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor);
}

function colorCircle(centerX,centerY, radius,fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY, radius,0,Math.PI*2,true);
    canvasContext.fill();
}

function colorText(showWords,textX,textY,fillColor,fontSizeAndStyle){
    canvasContext.fillStyle = fillColor;
    canvasContext.font = fontSizeAndStyle+"px Arial";
    canvasContext.fillText(showWords,textX,textY);

}

function sorteiaCor(c){
    if(c%2 == 0){
        return '#007FFF';
    }else{
        return '#666';
    }
}