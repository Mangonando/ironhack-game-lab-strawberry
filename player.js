class Player {
  constructor(x, y, gravity) {
      this.x = x;
      this.y = y;
    this.diameter = 25;
    this.gravity = gravity;
    
  }
  teleport(world) {
    if (this.x > world.x + world.width - 0.5 * this.diameter) {
      this.x = world.x + 0.5 * this.diameter;
    }
    if (this.x < world.x + 0.5 * this.diameter) {
      this.x = world.x + world.width - 0.5 * this.diameter;
    }
    if (this.y > world.y + world.height - 0.5 * this.diameter) {
      this.y = world.y + 0.5 * this.diameter;
    }
    if (this.y < world.y + 0.5 * this.diameter) {
      this.y = world.y + world.height - 0.5 * this.diameter;
    }
  }

  wall(world) {
    if (this.x > world.x + world.width - 0.5 * this.diameter) {
      console.log("right squaaaaare");
      this.x = world.x + world.width / 2;
      this.y = world.y + world.height / 2;
      game.livesGone();
    }
    if (this.x < world.x + 0.5 * this.diameter) {
      console.log("left squaaaaare");
      this.x = world.x + world.width / 2;
      this.y = world.y + world.height / 2;
      game.livesGone();
    }
    if (this.y > world.y + world.height - 0.5 * this.diameter) {
      console.log("down squaaaaare");
      this.x = world.x + world.width / 2;
      this.y = world.y + world.height / 2;
      game.livesGone();
    }
    if (this.y < world.y + 0.5 * this.diameter) {
      console.log("up squaaaaare");
      this.x = world.x + world.width / 2;
      this.y = world.y + world.height / 2;
      game.livesGone();
    }
  }

  draw() {
    fill(BLUE);
    stroke(BLUE);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    this.y = this.y + this.gravity;
    // this.speed = this.speed + this.gravity;

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
  }
}
