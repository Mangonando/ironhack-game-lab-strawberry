/*
Two worlds must be created:
1. World 1. square which changes color from orange 
to blue every 4 seconds. I should be able to replicate it updating its size
2. World 2 & 3. Orange square. I should be able to replicate it updating its size
Blue = teleports
Orange = dies
*/

class World {
  constructor(x, y, width, height) {
    this.color = BLUE;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.number;
  }
  draw() {
    strokeWeight(4);
    stroke(this.color);
    noFill();
    rect(this.x, this.y, this.width, this.height);
    if (frameCount % 100 === 0) {
      if (this.color === BLUE) {
        this.color = ORANGE;
      } else if (this.color === ORANGE) {
        this.color = BLUE;
      }
    }
  }
}
// class World2 {
    
// }
