
var xmax = 900;
var ymax = 700;
var deathYVal = 500;
var xmin = 0;
var ymin = 0;
var speedIncrement = 0.5;

var increment = 1; //1 if 60fps, 2 if 30fps, etc.
var xpos = 300 * increment;
var ypos = 450 * increment;
var xspeed = 0;
var yspeed = 0;
var maxSpeed = 15;
var charHeight = 100;
var charWidth = 100;

var gravity = .15 * increment;

var progressNum = 0;
var prog = 0;

var addPlat = 1;

var endStage1Val = 0;

var doRandom;

var tryAgainXVal = 300;

var platType1;
var platType2;
var platType3;

var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;
var escPressed = 0;

var goBackNum;

var platWidth = 20;
var platType;

var plat1XPos = 0;
var plat1YPos = ypos;
var plat1Length = 400;

var backgroundFlip = 0; 

var plat2XPos = 0;
var plat2YPos = 0;
var plat2Length = 1;

var plat3XPos = 0;
var plat3YPos = 650;
var plat3Length = 1;

var firstPlatXPos = 0;
var firstPlatYPos = 480 + charHeight;
var firstPlatLength = 2000;


var backgroundXPos = 0;
var backgroundYPos = 0;
var backgroundWidth = 5112.15;
var backgroundHeight = 700;

var background2XPos = 0;
var background2YPos;
var background2Pic;
var background2Var;

var backgroundSwitches = 0;


var maxYRandomVar = 150; //for randomPlat

var textInBox;
var textBoxXVal = 150;
var textBoxYVal = 0;
var textBoxWidth = 600;
var textBoxHeight = 100;
var canText = false;
var text = " ";
var textFont = "30px Times";
var isTooSlow = false;


var reverseLimit = 0;
var frameCount = 0;
var leftRight; //0 if facing right, 1 if facing left

var canPrintPlat2 = false;
var canPrintPlat3 = false;

var canProgress = true;

var canLoop = true;

var dead = false;

var stage = 1;

var tryAgainExists;








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

  erase(plat1XPos, plat1YPos - 10, plat1Length, platWidth + 10); 
  erase(plat2XPos, plat2YPos - 10, plat2Length, platWidth + 10);
  erase(plat3XPos, plat3YPos - 10, plat3Length, platWidth + 10);
  erase(firstPlatXPos, firstPlatYPos, firstPlatLength, 10);



endStage1Val = 0;

dead = false;

xmax = 900;
ymax = 700;
 deathYVal = 500;
 xmin = 0;
  ymin = 0;

increment = 1; //1 if 60fps, 2 if 30fps, etc.
xpos = 300 * increment;
ypos = 300 * increment;
xspeed = 0;
yspeed = 0;
maxSpeed = 15;
charHeight = 100;
charWidth = 100;

gravity = .15 * increment;

progressNum = 0;
prog = 0;

addPlat = 1;

doRandom = true;

tryAgainXVal = 300;

upPressed = 0;
downPressed = 0;
leftPressed = 0;
rightPressed = 0;
escPressed = 0;

platWidth = 20;


plat1XPos = 50000;
plat1YPos = 450;
plat1Length = 400;

plat2XPos = 50000;
plat2YPos = 0;
plat2Length = 1;

plat3XPos = 50000;
plat3YPos = 450;
plat3Length = 1;

firstPlatXPos = 0;
firstPlatYPos = 480 + charHeight;
firstPlatLength = 2000;

if (stage == 1) {
  backgroundXPos = 0;
  backgroundYPos = 0;
  backgroundWidth = 5112.15;
  backgroundHeight = 700;
}
else if (stage == 2) {
  backgroundWidth = 2000;
  backgroundheight = 700;
}
else if (stage == 3) {
  backgroundWidth = 2400;
  backgroundHeight = 700;
}

maxYRandomVar = 150; //for randomPlat

//textBox(text, textBoxXVal, textBoxYVal, textBoxWidth, textBoxHeight, textFont);

textBoxXVal = 150;
textBoxYVal = 0;
textBoxWidth = 600;
textBoxHeight = 100;
canText = false;

goBackNum = 0;


tryAgainExists = false;



reverseLimit = 0;
frameCount = 0;

text = " ";

 plat1XPos = 50000;
  plat2XPos = 50000;
  plat3XPos = 50000;



canPrintPlat2 = false;
canPrintPlat3 = false;

canProgress = true;

gamePos = 0;
var char = new Image();
  
  
  char.width = 10;
  char.height = 10;
canLoop = true;



 

  char.onload = function() {
    context.drawImage(char, 10, 10, 10, 10, 100, 300, charWidth, charHeight);
  };
  context.beginPath();
  gameLoop();





}

function slowDownX()
{
  if (xspeed > 0)
    xspeed = xspeed - speedIncrement;
  if (xspeed < 0)
    xspeed = xspeed + speedIncrement;
}

function slowDownY()
{
  if (yspeed > 0)
    yspeed = yspeed - speedIncrement;
  if (yspeed < 0)
    yspeed = yspeed + speedIncrement;
}



function gameLoop()
{
  



  erase(plat1XPos, plat1YPos - 10, plat1Length, platWidth + 10); 
  erase(plat2XPos, plat2YPos - 10, plat2Length, platWidth + 10);
  erase(plat3XPos, plat3YPos - 10, plat3Length, platWidth + 10);
  erase(firstPlatXPos, firstPlatYPos, firstPlatLength, platWidth);




  if(dead)
    goBack(); 
 


  
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
        text = "Go Back";
        dead = true;
        
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

  if (leftPressed == 0 && rightPressed == 0) {
    if(xspeed != 0)
      slowDownX();
  }

  

  
  backgroundSwitch();



  drawBackground(0);

  if(stage == 1)
    background2Var = 2650;
  else if(stage == 2)
    background2Var = 1000;

  if(prog >= background2Var)
  drawBackground(1);



  SolidPlatform("images/SolidPlatform.png", firstPlatXPos, firstPlatYPos, firstPlatLength, platWidth);
 
    
  if(doRandom)
   randomPlat(200);
  
    drawRandomPlat1(plat1XPos, plat1YPos, plat1Length); 
  
  if (canPrintPlat2 == true)
    drawRandomPlat2(plat2XPos, plat2YPos, plat2Length);
  
  if (canPrintPlat3 == true)
    drawRandomPlat3(plat3XPos, plat3YPos, plat3Length);
  
  eraseText();

 
  

  textBox(text, textBoxXVal, textBoxYVal, textBoxWidth, textBoxHeight, textFont);

  textSwitching();
   
  frameIncrease();
   

 
  moveChar();
  console.log(prog);
  

   
 
    


   
     //var character = context.drawImage(char, 0, 0, 300, 300, xpos, ypos, charWidth, charHeight);
     animateSprite();
   
  

  
  if (upPressed == 0)
    yspeed+=gravity
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();

  
  
 

  if(canLoop)  
    setTimeout("gameLoop()", 16 + (2/3));


}

function drawBackground(flip) {
    if(flip == 0){
    var background = new Image();
    background.src = backgroundPic;
    context.drawImage(background, backgroundXPos, backgroundYPos, backgroundWidth, backgroundHeight);
  }
  else {
    var background2 = new Image();
    background2.src = background2Pic;
    context.drawImage(background2, background2XPos, backgroundYPos, backgroundWidth, backgroundHeight)
  }
}

function backgroundFlipper() {
  if(backgroundFlip >= 1)
    backgroundFlip = 0;
  else
    backgroundFlip++;

}

function changeBackground(newBack) {
  backgroundPic = newBack;
  backgroundXPos -= backgroundXPos;
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
  if(canProgress) {
  progTogether();
  xspeed = Math.min(xspeed + increment, 1*maxSpeed);
  prog+=xspeed;
}
  

  
  

}

function antiProgress() {
  
  progTogether();
  progressNum += xspeed;
  xspeed = Math.max(xspeed - increment, -1*maxSpeed);
  prog+=xspeed;
   
}

function progTogether() {
  plat1XPos -= xspeed;
  plat2XPos -= xspeed;
  plat3XPos -= xspeed;
  firstPlatXPos -= xspeed;
  backgroundXPos -= xspeed;
  background2XPos -= xspeed;
  if(tryAgainExists)
    tryAgainXVal -= xspeed;
  
  progressNum += xspeed;
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
 

  if(addPlat == 1) {
    platType1 = platType
    plat1XPos = platXPos;
    plat1YPos = platYPos;
    plat1Length = platLength;
  }
  else if(addPlat == 2) {
    canPrintPlat2 = true;
    platType2 = platType;

    plat2XPos = platXPos;
    plat2YPos = platYPos;
    plat2Length = platLength;
  }
  else if(addPlat == 3) {
    canPrintPlat3 = true;
    platType3 = platType;
    
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
  context.fillStyle = "#ffffff";
  context.fillRect(xVal, yVal, width, height);
  context.fillStyle = "#000000";
  context.fillText(text, xVal, yVal + height*2/3);
  context.stroke();

  

}

function eraseText() {
  context.fillStyle = "#ffffff";
  context.fillRect(350, 0, 300, 100);
  context.stroke();

}



function goBack() {
 
    


  erase(plat1XPos, plat1YPos - 10, plat1Length, platWidth + 10); 
  erase(plat2XPos, plat2YPos - 10, plat2Length, platWidth + 10);
  erase(plat3XPos, plat3YPos - 10, plat3Length, platWidth + 10);
  erase(firstPlatXPos, firstPlatYPos, firstPlatLength, 10);
  



 

 backgroundSwitches = 0;





  
  //eraseText();

  erase(xpos, ypos, charWidth, charHeight);

  canLoop = false;

  setTimeout("game()", 3000);

}

function textSwitching() {

  if(!dead){
    if(stage == 1){
      if(prog < 4830){
        if (!isTooSlow)
          text = "   Alright, let's get going.";
        setTimeout("tooSlow()", 3000);
      }
      if(prog >= 4830 && prog < 9700){
        text = "   Just have to keep going, can't lose focus."
      }
      else if(prog >= 9700 && prog < 12000){
        text = "   C'mon, just get a few more pages in.";
      }
      else if(prog >= 12000 && prog < 15000){
        text = "   Ah- wait, where was I? It was...";
      }
      else if(prog >= 15000 && prog < 17000){
        text = "   Dammit.";
      }
      else if(prog >= 17000 && prog < 20000){
        text = "   I'm not getting anywhere with this.";
      }
      else if(prog >= 1000){
        text = "   Maybe I should try something else and come back to this later.";
        endStage1();
      }
    }
    else if(stage == 2){
      if(prog < 2000)
        text = "    Well, this is different at least.";
      if(prog >= 2000 && prog < 4000)
        text = "    I'm not feeling very good, still.";
      if(prog >= 4000 && prog < 6000)
        text = "    I need to do something else, I'm just out of it.";
      if(prog >= 6000) {
        text = "    I'll come back to this later.";
        endStage1();
      }
    }
    else if(stage == 3) {
      if(prog < 1200)
        text = "    Shit, I'm terrible at spanish.";
      if(prog >= 1200 && prog < 2400)
        text = "    What am I even doing here.";
      if(prog >= 2400 && prog < 3600)
        text = "    Alright, I'm done. I can't focus.";
      if(prog >= 4000){
        text = "    I'm just gonna try one more.";
        endStage1();
      }
    }


  }


}

function tooSlow() {
  if(prog == 0) {
    text = "Use the arrow keys to move around";
    
    isTooSlow = true;
  }
  else
    isTooSlow = false;

}

function backgroundSwitch(){
  console.log("stage: " + stage);
  if (stage == 1){

  if(prog >= 0 && prog < 2650) {
    backgroundPic = "images/background1.png";
    if (backgroundSwitches == 0){
    backgroundSwitches++;
   }
 
  }
  else if(prog >= 2650 && prog < 9000){
    
    if(backgroundSwitches == 1){
    
      background2XPos = 2500;
      
      backgroundSwitches++;
    }
    
      background2Pic = "images/background2.png";
  }
  else if (prog >= 9300 && prog < 14400) {
    if(backgroundSwitches == 2) {
      backgroundXPos = 1000;
   
      backgroundSwitches++;
    }
   
      backgroundPic = "images/background3.png";
  
  }
  else if (prog >= 14400 && prog < 19000) {
    if(backgroundSwitches == 3) {
      background2XPos = 1000;
    
      backgroundSwitches++;
    }
   
      background2Pic = "images/background4.png";
  }
  else if (prog >= 19000 && prog < 24000) {
    if(backgroundSwitches == 4) {
      backgroundXPos = 1000;
    
      backgroundSwitches++;
    }
   
      backgroundPic = "images/background5.png";
  }

  }
  else if(stage == 2) {
    
    if(prog >= 0 && prog < 1000) {
    if (backgroundSwitches == 0){
    backgroundSwitches++;
    backgroundXPos = 0;
   }
    backgroundPic = "images/background6.png";
    
 
    }
     else if(prog >= 1000 && prog < 3000){
    
    if(backgroundSwitches == 1){
    
      background2XPos = 1500;
      
      backgroundSwitches++;
    }
    
      background2Pic = "images/background7.png";
    }
    else if (prog >= 3000 && prog < 5000) {
       if(backgroundSwitches == 2) {
       backgroundXPos = 1500;
     
        backgroundSwitches++;
      }
     
        backgroundPic = "images/background8.png";
  
    }
    else if (prog >= 5000 && prog < 7000) {
      if(backgroundSwitches == 3) {
        background2XPos = 1500;
    
        backgroundSwitches++;
      }
   
        background2Pic = "images/background9.png";
    }
  }
  else if (stage == 3) {
     if(prog >= 0 && prog < 1400) {
    if (backgroundSwitches == 0){
    backgroundSwitches++;
    backgroundXPos = 0;
   }
    backgroundPic = "images/background10.png";
    
 
    }
     else if(prog >= 1400 && prog < 2700){
    
      if(backgroundSwitches == 1){
    
        background2XPos = 1000;
      
        backgroundSwitches++;
      }
    
      background2Pic = "images/background11.png";
    }
    else if(prog >= 2700){

      if(backgroundSwitches == 2){
    
        backgroundXPos = 1500;
      
        backgroundSwitches++;
      }
    
      backgroundPic = "images/background12.png";
    }

  }
}



function endStage1() {
  if(endStage1Val == 0) {
   firstPlatXPos = 1000;
   endStage1Val++;
  }
  doRandom = false;
  if(firstPlatXPos <= -200) {
  tryAgainExists = true;
  tryAgain(100, 100, 600, 200);
  if(tryAgainXVal < -400){
    stage++;
    dead = true;
    
  }
  if(tryAgainXVal > 700) {
    dead = true;
  }

}



}

function tryAgain(xval, yval, width, height) {
  var rightArrow = new Image();
  rightArrow.src = "images/Arrow-right.png";
  var leftArrow = new Image();
  leftArrow.src = "images/Arrow-left.png";
  context.drawImage(leftArrow, xval, yval + height/2, width/4, height);
  context.drawImage(rightArrow, xval + (3*width)/4, yval + height/2, width/4, height);
  textBox("  Go left to try again.", xval + width/4, yval + height/2, width/2, height/3, "30px Times");
  textBox("  Go right to move on.", xval + width/4, yval + height, width/2, height/3, "30px Times");

}

//function textBox(text, xVal, yVal, width, height, font) {
















