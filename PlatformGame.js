
var xmax = 1000;
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

var character = new Image();


function loadCanvas() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  context.fillStyle = "#FF0000";
  context.rect(0, 0, 999, 600);
  context.stroke();
  game();
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

function game(){
  var gamePos = 0;
  var character = new Image();
  character.src = "LuigiPic.png";
  context.drawImage(character, xpos, ypos);
}

function gameLoop()
{
 
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
    
 
 
  
    document.getElementById('character').style.left = xpos;
    document.getElementById('character').style.top = ypos;

  
  if (upPressed == 1) {
    if (yspeed==0){ yspeed = -10;
     } else { yspeed += gravity; }
    }
  if (downPressed == 1)
    yspeed = Math.min(yspeed + 1,1*maxSpeed);
  if (rightPressed == 1)
    xspeed = Math.min(xspeed + 1,1*maxSpeed);
  if (leftPressed == 1)
    xspeed = Math.max(xspeed - 1,-1*maxSpeed);

  
  if (upPressed == 0)
    yspeed+=gravity
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();
    
    BIPlatform(document.getElementById("platform"));

    
  setTimeout("gameLoop()",16 + (2/3));
}

function gravity() {
   yspeed += 3;
}


function keyDown(e)
{
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 38 || code == 32)
    upPressed = 1;
  if (code == 40)
    downPressed = 1;
  if (code == 37) 
    leftPressed = 1;
  if (code == 39) 
    rightPressed = 1;
    
  
}

function keyUp(e)
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