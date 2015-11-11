function player(Object o) {
    this.x = 0;
    this.y = 0;
}




player.prototype.draw = function(context, interpolation) {
  context.fillCircle(this.x, this.y + this.velocity * interpolation, 30);
};

player.prototype.moveLeft = function() {
    this.x -= 1;
}

player.prototype.moveRight = function() {
    this.x += 1;
}

player.prototype.moveUp = function() {
    this.y += 1;
}

player.prototype.moveDown = function() {
    this.y -= 1;
}

var Key = {
  pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  
  isDown: function(keyCode) {
    return this.pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
}

player.prototype.update = function() {
  if (Key.isDown(Key.UP)) this.moveUp();
  if (Key.isDown(Key.LEFT)) this.moveLeft();
  if (Key.isDown(Key.DOWN)) this.moveDown();
  if (Key.isDown(Key.RIGHT)) this.moveRight();
};

