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
