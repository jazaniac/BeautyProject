
var xmax = 900;
var ymax = 499;
var xmin = 0;
var ymin = 0;

var increment = 1; //1 if 60fps, 2 if 30fps, etc.
var xpos = 300 * increment;
var ypos = 600 * increment;
var xspeed = 0;
var yspeed = 0;
var maxSpeed = 15;
var charHeight = 100;
var charWidth = 100;

var gravity = .15 * increment;

var progressNum = 0;
var prog = 0;

var addPlat = 1;

var platType1;
var platType2;
var platType3;

var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;
var escPressed = 0;

var platWidth = 20;
var platType;

var plat1XPos = 0;
var plat1YPos = ypos;
var plat1Length = 400;

var plat2XPos = 0;
var plat2YPos = 0;
var plat2Length = 1;

var plat3XPos = 0;
var plat3YPos = ypos;
var plat3Length = 1;

var maxYRandomVar = 150; //for randomPlat

var textInBox;
var textBoxXVal = 0;
var textBoxYVal = 0;
var textBoxWidth = 1;
var textBoxHeight = 1;
var canText = false;


var reverseLimit = 0;
var frameCount = 0;
var leftRight; //0 if facing right, 1 if facing left

var canPrintPlat2 = false;
var canPrintPlat3 = false;


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
  console.log("prog: " + prog);
  erase(plat1XPos, plat1YPos - 10, plat1Length, platWidth + 10); 
  erase(plat2XPos, plat2YPos - 10, plat2Length, platWidth + 10);
  erase(plat3XPos, plat3YPos - 10, plat3Length, platWidth + 10);


  
  //eraseText();

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

    

   randomPlat(200);
  
    drawRandomPlat1(plat1XPos, plat1YPos, plat1Length); //need to make it so that plat type doesn't change with the next plat
    console.log("plat1xpos: " + plat1XPos + "plat1YPos: " + plat1YPos + "plat1Length: " + plat1Length);
  if (canPrintPlat2 == true)
    drawRandomPlat2(plat2XPos, plat2YPos, plat2Length);
  console.log("plat2xpos: " + plat2XPos + "plat2YPos: " + plat2YPos + "plat2Length: " + plat2Length);
  if (canPrintPlat3 == true)
    drawRandomPlat3(plat3XPos, plat3YPos, plat3Length);
  console.log("plat3xpos: " + plat3XPos + "plat3YPos: " + plat3YPos + "plat3Length: " + plat3Length);

  textBox("Hello World", 350, 0, 300, 100, "30px Times");

  if(prog > 200) {
    eraseText();
  }
  if(prog > 200){
    console.log("new stuff triggered");
    textBox("new stuff", 350, 0, 300, 100, "30px Times");
  }



   
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

  console.log("progressNum: " + progressNum);
    
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
    if (xpos <= (dist + length) && (xpos + charWidth) >= dist && (ypos + charHeight - width) >= height && (ypos + charHeight - width) <= height + width) {
         ypos = height - charHeight + width; 
       if(yspeed >= 0){
        yspeed -= yspeed;
       }
       if(downPressed == 1)
        ypos += width;


    }
    
}

function HangRail(platform, dist, height, length, width) {
    var plat = new Image();
    plat.src = platform;
    context.drawImage(plat, dist, height, length, width);
    if (xpos <= (dist + length) && xpos + charWidth >= dist && ypos <= height + width && ypos >= height) {
         ypos = height; 
       if(yspeed >= 0){
        
        yspeed -= yspeed;
       }
       if(downPressed == 1)
        ypos += width;
    }
    
}

function SolidPlatform(platform, dist, height, length, width) {
  var plat = new Image();
  plat.src = platform;
   context.drawImage(plat, dist, height, length, width);
    if (xpos <= (dist + length) && xpos + charWidth >= dist && (ypos + charHeight - width) >= height && (ypos + charHeight - width) <= height + width) {
         ypos = height - charHeight + width; 
       if(yspeed >= 0){
        yspeed -= yspeed;
       }
     }
    if(xpos <= (dist + length) && xpos >= dist && (ypos) >= height && ypos <= height+width) {
      ypos = height + platWidth;
      if(yspeed <= 0)
        yspeed = -.0001;
      ypos = height + platWidth;
      
    }
    



}

function progress(d) {

  plat1XPos -= xspeed;
  plat2XPos -= xspeed;
  plat3XPos -= xspeed;
  xspeed = Math.min(xspeed + increment, 1*maxSpeed);
  progressNum += xspeed;
  prog++;
  

  
  

}

function antiProgress() {
  plat1XPos -= xspeed;
  plat2XPos -= xspeed;
  plat3XPos -= xspeed;
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
  
   return Math.floor(Math.random() * ((max + 1) - min)) + min;
}


function randomPlat(freq) {
  var canDo;

  canDo = 0;

  if(addPlat == 2)
    canDo = plat1Length;
  if(canPrintPlat2){
    if(addPlat == 3)
      canDo = plat2Length;
  }
  if(canPrintPlat3) {
    if(addPlat == 1)
      canDo = plat3Length;
  }

  if (progressNum >= freq + canDo) {

  var platXPos;
  var platYPos;
  var platLength;
  var maxYRandom;
  

  if(addPlat == 2)
    maxYRandom = plat1YPos - maxYRandomVar;
  else if(addPlat == 3)
    maxYRandom = plat2YPos - maxYRandomVar;
  else if(addPlat == 1)
    maxYRandom = plat3YPos - maxYRandomVar;

  if(platType == 2)
    maxYRandom += 70;

     
  
  
  if (maxYRandom < 100)
    maxYRandom += 100;
  
  platXPos = getRandomInt(xpos + 200, xpos + 300) + 600;
 

  platLength = getRandomInt(300, 800);
  
  
  platYPos = getRandomInt(maxYRandom, 500);
 
  
  platType = getRandomInt(1, 3); //1 = BIplat, 2 = hangrail, 3 = solidplat
  
  progressNum-=progressNum;
  console.log("progressNum: " + progressNum);

  if(addPlat == 1) {
    platType1 = platType
    plat1XPos = platXPos;
    plat1YPos = platYPos;
    plat1Length = platLength;
  }
  else if(addPlat == 2) {
    canPrintPlat2 = true;
    platType2 = platType;
    console.log(canPrintPlat2);
    plat2XPos = platXPos;
    plat2YPos = platYPos;
    plat2Length = platLength;
  }
  else if(addPlat == 3) {
    canPrintPlat3 = true;
    platType3 = platType;
    console.log(canPrintPlat3);
    plat3XPos = platXPos;
    plat3YPos = platYPos;
    plat3Length = platLength;
  }

    if(addPlat > 3)
      addPlat -= addPlat;

    addPlat++;


  }
}

function drawRandomPlat1(dist, height, length) {
  if(platType1 == 1)
    BIPlatform("images/MarioPlatform.png", dist, height, length, platWidth);
  else if(platType1 == 2)
    HangRail("images/HangRail.png", dist, height, length, platWidth);
  else if(platType1 == 3)
    SolidPlatform("images/SolidPlatform.png", dist, height, length, platWidth);
}

function drawRandomPlat2(dist, height, length) {
  if(platType2 == 1)
    BIPlatform("images/MarioPlatform.png", dist, height, length, platWidth);
  else if(platType2 == 2)
    HangRail("images/HangRail.png", dist, height, length, platWidth);
  else if(platType2 == 3)
    SolidPlatform("images/SolidPlatform.png", dist, height, length, platWidth);
}

function drawRandomPlat3(dist, height, length) {
  if(platType3 == 1)
    BIPlatform("images/MarioPlatform.png", dist, height, length, platWidth);
  else if(platType3 == 2)
    HangRail("images/HangRail.png", dist, height, length, platWidth);
  else if(platType3 == 3)
    SolidPlatform("images/SolidPlatform.png", dist, height, length, platWidth);
}




function textBox(text, xVal, yVal, width, height, font) {
  context.font = font;
  context.fillStyle = "#000000";
  context.rect(xVal, yVal, width, height);
  context.fillText(text, xVal, yVal + height*2/3);
  context.stroke();
  

}

function eraseText() {
  context.fillStyle = "#ffffff";
  context.fillRect(350, 0, 1000, 1000);
  context.stroke();

 
  
}








