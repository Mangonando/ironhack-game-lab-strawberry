class Player {
  constructor(x, y) {
    this.x = Math.floor(Math.random() * 200) + 50;
    this.y = Math.floor(Math.random() * 200) + 50;
    this.diameter = 25;
    // this.number;
    // this.speed = 0;
    this.gravity = - 1.5;
    this.lives = 3;
  }

  teleport() {
    if (this.x > game.world.x + game.world.width - 0.5 * this.diameter) {
      console.log("right squaaaaare");
      this.x = game.world.x + 0.5 * this.diameter;
    }
    if (this.x < game.world.x + 0.5 * this.diameter) {
      console.log("left squaaaaare");
      this.x = game.world.x + game.world.width - 0.5 * this.diameter;
    }
    if (this.y > game.world.y + game.world.height - 0.5 * this.diameter) {
      console.log("down squaaaaare");
      this.y = game.world.y + 0.5 * this.diameter;
    }
    if (this.y < game.world.y + 0.5 * this.diameter) {
      console.log("up squaaaaare");
      this.y = game.world.y + game.world.height - 0.5 * this.diameter;
    }
  }
  wall() {
    if (this.x > game.world.x + game.world.width - 0.5 * this.diameter) {
      this.x = game.world.x + (game.world.width / 2);
      this.y = game.world.y + (game.world.height / 2);
      this.livesGone()
    }
    if (this.x < game.world.x + 0.5 * this.diameter) {
      console.log("left squaaaaare");
      this.x = game.world.x + (game.world.width / 2);
      this.y = game.world.y + (game.world.height / 2);

      this.livesGone()
    }
    if (this.y > game.world.y + game.world.height - 0.5 * this.diameter) {
      console.log("down squaaaaare");
      this.x = game.world.x + (game.world.width / 2);
      this.y = game.world.y + (game.world.height / 2);
      this.livesGone()
    }
    if (this.y < game.world.y + 0.5 * this.diameter) {
      console.log("up squaaaaare");
      this.x = game.world.x + (game.world.width / 2);
      this.y = game.world.y + (game.world.height / 2);
      this.livesGone()
    }
  }

  livesGone() {
      this.lives --
    if (this.lives === 0) {
        console.log("Game Over");
      }
  }

  draw() {
    clear();
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
