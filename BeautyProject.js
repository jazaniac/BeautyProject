
var xmax = 900;
var ymax = 499;
var xmin = 0;
var ymin = 0;

var increment = 1; //1 if 60fps, 2 if 30fps, etc.
var xpos = 100 * increment;
var ypos = 500 * increment;
var xspeed = 0;
var yspeed = 0;
var maxSpeed = 10;
var charHeight = 100;
var charWidth = 100;

var gravity = .2 * increment;

var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;
var escPressed = 0;
var plat1XPos = 100;
var plat1YPos = 550;
var reverseLimit = 0;




var canvas;
var context;

var char = new Image();
char.src = "images/LuigiPic.png";
var blank = new Image();
blank.src = "images/blankImage.jpg";

function loadCanvas() {
  
  canvas = document.getElementById('canvas');
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
    context.drawImage(char, 100, 500, charWidth, charHeight);
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
  
    
  
   erase(xpos, ypos, charWidth, charHeight);
   erase(plat1XPos, plat1YPos, 550, 10);
   
 

    
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
  if (rightPressed == 1)
    progress(xpos);
    
  if (leftPressed == 1)
    antiProgress(xpos);
   

 
  moveChar();
  BIPlatform("images/MarioPlatform.png", plat1XPos, plat1YPos, 550, 10);

   
 
    


   
     var character = context.drawImage(char, xpos, ypos, charWidth, charHeight);
   
  

  
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

function progress(d) {
  xspeed = Math.min(xspeed + increment, 1*maxSpeed);
  plat1XPos -= xspeed;

}

function antiProgress(d) {
  


   xspeed = Math.max(xspeed - increment, -1*maxSpeed);
   plat1XPos -= xspeed;
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

function exit() {

}

function gravity() {
   yspeed += 3;
}





function CannonShot(player) {
       
    
}