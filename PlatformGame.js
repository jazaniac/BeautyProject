
var xmax = 1000;
var ymax = 750;
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

 
  setTimeout("gameLoop()",10);
}

function gravity() {
   yspeed += 3;
}


function keyDown(e)
{
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 38)
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
  if (code == 38)
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