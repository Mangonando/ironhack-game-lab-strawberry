/*
Two worlds must be created:
1. World 1. square which changes color from orange 
to blue every 4 seconds. I should be able to replicate it updating its size
2. World 2 & 3. Orange square. I should be able to replicate it updating its size
Blue = teleports
Orange = dies
*/


  class World {
    constructor(x, y) {
        this.x;
        this.y;
    }
    draw() {
        strokeWeight(4);
        noFill()
        square(30, 20, 250)
    }
}