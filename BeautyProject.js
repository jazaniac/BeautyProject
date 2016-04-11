
var xmax = 900;
var ymax = 499;
var xmin = 0;
var ymin = 0;

var increment = 1; //1 if 60fps, 2 if 30fps, etc.
var xpos = 100 * increment;
var ypos = 500 * increment;
var xspeed = 0;
var yspeed = 0;
var maxSpeed = 15;
var charHeight = 100;
var charWidth = 100;

var gravity = .2 * increment;

var progressNum = 0;

var platType;

var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;
var escPressed = 0;

var plat1XPos = 0;
var plat1YPos = 0;
var plat1Length = 1;
var plat1Width = 10;

var reverseLimit = 0;
var frameCount = 0;
var leftRight; //0 if facing right, 1 if facing left




var canvas;
var context;

var char = new Image();
char.src = "images/FinalJacqueSprite.png";




function loadCanvas() {
  
  canvas = document.getElementById('canvas'), dashLen = 220, 
    dashOffset = dashLen, speed = 5,
    txt = "STROKE-ON CANVAS", x = 30, i = 0;
  context = canvas.getContext("2d");
  context.rect(0, 5, 1010, 1010);
  context.stroke();
  game();
}

function game() {
  var gamePos = 0;
  var char = new Image();
  
  
  char.width = 10;
  char.height = 10;
 

  char.onload = function() {
    context.drawImage(char, 10, 10, 10, 10, 100, 500, charWidth, charHeight);
  };
  context.beginPath();
  gameLoop();





}

function slowDownX()
{
  if (xspeed > 0)
    xspeed = xspeed - increment;
  if (xspeed < 0)
    xspeed = xspeed + increment;
}

function slowDownY()
{
  if (yspeed > 0)
    yspeed = yspeed - increment;
  if (yspeed < 0)
    yspeed = yspeed + increment;
}



function gameLoop()
{
  
  erase(plat1XPos, plat1YPos, plat1Length, 10); 
  erase(xpos, ypos, charWidth, charHeight);
  

   
 

    
    ypos = ypos + yspeed;

   


    
    if(xpos >= xmax) {
        xpos = xmax;
        xspeed -= xspeed;
    }
    if(ypos >= ymax) {
        ypos = ymax;
        yspeed -= yspeed;
    }
    if (ypos <= ymin) {
        ypos = ymin;
        yspeed -= yspeed;
    }
    if (xpos <= xmin){
        xpos = xmin;
        xspeed -= xspeed;
    }
     if (upPressed == 1) {
  
    if (yspeed==0){ yspeed = increment*-8;
     } else { yspeed += gravity; }
    }
  if (downPressed == 1)
    yspeed = Math.min(yspeed + increment, 1*maxSpeed);
  if (rightPressed == 1){
    progress(xpos);
    leftRight = 0;
  }
    
  if (leftPressed == 1){
    antiProgress();
    leftRight = 1;
  }

   randomPlat(50);
  
   if(platType == 1)
    BIPlatform("images/MarioPlatform.png", plat1XPos, plat1YPos, plat1Length, 10);
  else if(platType == 2)
    HangRail("images/HangRail.png", plat1XPos, plat1YPos, plat1Length, 10);
  else if(platType == 3)
    SolidPlatform("images/SolidPlatform.png", plat1XPos, plat1YPos, plat1Length, 10);
  frameIncrease();
   

 
  moveChar();
  

   
 
    


   
     //var character = context.drawImage(char, 0, 0, 300, 300, xpos, ypos, charWidth, charHeight);
     animateSprite();
   
  

  
  if (upPressed == 0)
    yspeed+=gravity
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();

   // console.log("ypos: " + ypos);
   // console.log("xpos: " + xpos);

  
    
  setTimeout("gameLoop()", 16 + (2/3));


}

function erase(xpos, ypos, width, height) {
   var blank = context.createImageData(width, height);
    for (var i = blank.data.length; --i >= 0; )
      blank.data[i] = 0;
    context.putImageData(blank, xpos, ypos);
}


function BIPlatform(platform, dist, height, length, width) {
    var plat = new Image();
    plat.src = platform;
    context.drawImage(plat, dist, height, length, width);
    if (xpos <= (dist + length) && xpos >= dist && (ypos + charHeight - width) >= height && (ypos + charHeight - width) <= height + width) {
         ypos = height - charHeight + width; 
       if(yspeed >= 0){
        yspeed -= yspeed;
       }
       if(downPressed == 1)
        ypos += 1 + width;


    }
    
}

function HangRail(platform, dist, height, length, width) {
    var plat = new Image();
    plat.src = platform;
    context.drawImage(plat, dist, height, length, width);
    if (xpos <= (dist + length) && xpos >= dist && ypos >= height && ypos == height + width) {
         ypos = height; 
       if(yspeed >= 0){
        
        yspeed -= yspeed;
       }
    }
    
}

function SolidPlatform(platform, dist, height, length, width) {
  var plat = new Image();
  plat.src = platform;
   context.drawImage(plat, dist, height, length, width);
    if (xpos <= (dist + length) && xpos >= dist && (ypos + charHeight - width) >= height && (ypos + charHeight - width) <= height + width) {
         ypos = height - charHeight + width; 
       if(yspeed >= 0){
        yspeed -= yspeed;
       }
     }
    if(xpos <= (dist + length) && xpos >= dist && (ypos) >= height && ypos <= height+width) {
      ypos = height + width;
      if(yspeed <= 0)
        yspeed -= yspeed;
      ypos = height + width + 1;
      
    }
    if(plat1XPos == xpos && ypos + charHeight >= height){
      if (xspeed != 0)
        xspeed -= xspeed; 
      plat1XPos = xpos;
    }else if (xpos == dist + width && ypos + charHeight >= height){
      if (xspeed != 0)
        xspeed -= xspeed;
      plat1XPos = xpos - length;



    }



}

function progress(d) {
  plat1XPos -= xspeed;
  xspeed = Math.min(xspeed + increment, 1*maxSpeed);
  progressNum += xspeed;
  
  

}

function antiProgress() {
  

  plat1XPos -= xspeed;
  progressNum += xspeed;
  xspeed = Math.max(xspeed - increment, -1*maxSpeed);
   
}





function moveChar() {
   addEventListener('keydown', function(e) {

  
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 38 || code == 32)
    upPressed = 1;
  if (code == 40)
    downPressed = 1;
  if (code == 37) 
    leftPressed = 1;
  if (code == 39) 
    rightPressed = 1;
  if (code == 27)
    escPressed = 1;
});

addEventListener('keyup', function(e)
{
  var code = e.keyCode ? e.keyCode : e.which;
  
  if (code == 38 || code == 32)
    upPressed = 0;
  if (code == 40)
    downPressed = 0;
  if (code == 37)
    leftPressed = 0;
  if (code == 39)
    rightPressed = 0;
});
}

function animateSprite() {
  
  //console.log("method triggered");
  var imgX;
  if (yspeed == 0) {

    //console.log("second stage triggered");
    if (xspeed > 0){
      
      
      if(frameCount >= 0 && frameCount < 5){
        //console.log("first FC triggered");
        imgX = 2754;
      }
      else if(frameCount >= 5 && frameCount < 10 || frameCount >= 15 && frameCount <= 20)
        imgX = 3672;
      else if(frameCount >= 10 && frameCount < 15)
        imgX = 4590;
    }
    else if (xspeed < 0){
     
      if(frameCount >= 0 && frameCount < 5){
        //console.log("second FC triggered");
        imgX = 0;
      }
      else if(frameCount >= 5 && frameCount < 10 || frameCount>=15 && frameCount <= 20)
        imgX = 921;
      else if(frameCount >= 10 && frameCount <15)
        imgX = 1844;

    }
    if(xspeed == 0) {
      if(leftRight == 0)
        imgX = 3672;
      else
        imgX = 921;
    }

 }else{
 // console.log(leftRight);
  if(leftRight == 0)
        imgX = 2757;
      else if(leftRight==1)
        imgX = 0;
    
 

 }

var character = context.drawImage(char, imgX, 0, 185, 310, xpos, ypos, charWidth, charHeight);

}


function frameIncrease(){
  frameCount++;
  if(frameCount >= 20)
    frameCount = 0;
 // console.log(frameCount);

}

function getRandomInt(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomPlat(freq) {
 
  if (progressNum >= freq + plat1Length) {
     
  
  var maxYRandom = ypos - 200;
  if (maxYRandom < 200)
    maxYRandom += 200;
  plat1XPos = getRandomInt(xpos + 100, xpos + 200);
 

  plat1Length = getRandomInt(300, 800);
  
  
  plat1YPos = getRandomInt(maxYRandom, 900);
 
  
  platType = getRandomInt(1, 3); //1 = BIplat, 2 = hangrail, 3 = solidplat
  
  progressNum-=progressNum;
  
  }
}

function randomPlatTrigger (freq) {
  
}








