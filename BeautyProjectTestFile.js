var img = new Image();
img.src = "images/RealJacqueSprite.png";

 window.onload = function loadCanvas() {
  console.log("yo");
  canvas = document.getElementById('game'), dashLen = 220, 
    dashOffset = dashLen, speed = 5,
    txt = "STROKE-ON CANVAS", x = 30, i = 0;
  canvas.onload = function(){
  context = canvas.getContext("2d");
  context.rect(0, 5, 1010, 1010);
};
  context.onload = function(){sprite("images/RealJacqueSprite.png");};
}


function sprite (image) {
				
   
    	console.log("render");

        
        var character = context.drawImage(
           image,
           0,
           0,
           100,
           100,
           0,
           0,
           100,
           100);
    }


var img = sprite({
    
    width: 300,
    height: 300,
    image: img
});