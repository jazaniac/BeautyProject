
var xmax = 500;
var ymax = 600;
var xmin = 0;
var ymin = 0;

var xpos = 100;
var ypos = 500;
var xspeed = 1;
var yspeed = 0;
var maxSpeed = 10;
var gravity = .2;

var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;
var escPressed = 0;

var canvas;
var context;







function loadCanvas() {
  console.log("canvas loaded");
  canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");
  context.rect(0, 0, 999, 600);
  context.stroke();
  game();
}

function game() {
  var gamePos = 0;
  var char = new Image();
  char.src = "images/LuigiPic.png";

  char.onload = function() {
    context.drawImage(char, 100, 500, 100, 100);
  };
  context.beginPath();
  gameLoop();





}

function slowDownX()
{
  if (xspeed > 0)
    xspeed = xspeed - 1;
  if (xspeed < 0)
    xspeed = xspeed + 1;
}

function slowDownY()
{
  if (yspeed > 0)
    yspeed = yspeed - 1;
  if (yspeed < 0)
    yspeed = yspeed + 1;
}



function gameLoop()
{
  
    var char = new Image();
    char.src = "images/LuigiPic.png";

    xpos = xpos + xspeed;
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
    console.log("pressed");
    if (yspeed==0){ yspeed = -10;
     } else { yspeed += gravity; }
    }
  if (downPressed == 1)
    yspeed = Math.min(yspeed + 1,1*maxSpeed);
  if (rightPressed == 1)
    xspeed = Math.min(xspeed + 1,1*maxSpeed);
  if (leftPressed == 1)
    xspeed = Math.max(xspeed - 1,-1*maxSpeed);


    
 
 
  moveChar();

   var blank = context.createImageData(100, 100);
    for (var i = blank.data.length; --i >= 0; --i <=100)
      blank.data[i] = 0;
    context.putImageData(blank, xpos, ypos);
    console.log("character");

   var character = context.drawImage(char, xpos, ypos, 100, 100);

   

   
 
  
  
    
      

  
    
  
  if (upPressed == 0)
    yspeed+=gravity
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();

    
  setTimeout("gameLoop()", 16 + (2/3));


}

function moveChar() {
   addEventListener('keydown', function(e) {

  console.log("keyDown works");
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
  console.log("keyup works");
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

 



function picSwitch(b)  {
  var img = document.getElementById("character");
  img.src = b;
}

function getImgTop(img) {
    var bodyRect = document.body.getBoundingClientRect();
    elemRect = img.getBoundingClientRect();
    offset   = elemRect.top - bodyRect.top;
    return offset;
    
}

function getImgLeft(img) {
    var bodyRect = document.body.getBoundingClientRect();
    elemRect = img.getBoundingClientRect();
    offset   = elemRect.left - bodyRect.left;
    return offset;
    
}

function getImgWidth(img) {
    var bodyRect = document.body.getBoundingClientRect();
    elemRect = img.getBoundingClientRect();
    return elemRect.width;
    
}


function BIPlatform(platform) {
    var left = getImgLeft(platform);
    var right = left + getImgWidth(platform);
    var height = getImgTop(platform) - 40;
    if (xpos <= right && xpos >= left && ypos >= height && ypos <= height + 20) {
         ypos = height; 
       if(yspeed >= 0){
        
        yspeed -= yspeed;
       }
    }
    
}

function CannonShot(player) {
       
    
}