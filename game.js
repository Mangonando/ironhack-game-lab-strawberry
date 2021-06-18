class Game {
  constructor() {
    this.score = 0;
    this.timerValue = 0;
    this.scoreTimer = undefined;
    this.lives = 3;
    this.m = 0;
    this.s = 0;
    this.music;
  }

  setup() {
    this.world1 = new World(30, 20, 350, 200);
    this.player1 = new Player(205, 120, 0.25, 1);
    this.world2 = new World(300, 250, 500, 350);
    this.player2 = new Player(550, 425, 0.25, 0);
    this.world3 = new World(30, 300, 200, 350);
    this.player3 = new Player(130, 475, -0.5, 1);
    this.world4 = new World(850, 80, 350, 500);
    this.player4 = new Player(1025, 330, -0.5, 0);
    this.music = createAudio("POL-mad-run-short.wav");
    game.music.autoplay(true);
    // this.music = this.music = loadSound(, loaded)

    this.scoreTimer = setInterval(() => {
      console.log("interval", this.s);
      if (this.lives === 0) {
        clearInterval(this.scoreTimer);
      } else {
        this.s++;
      }
    }, 1000);
  }

  draw() {
    clear();
    this.player1.draw();
    this.world1.draw();
    this.player2.draw();
    this.world2.draw();
    this.player3.draw();
    this.world3.draw();
    this.player4.draw();
    this.world4.draw();

    switch (this.world1.color) {
      case BLUE:
        this.player1.teleport(this.world1);
        break;
      case ORANGE:
        this.player1.wall(this.world1);
        break;
    }

    switch (this.world2.color) {
      case BLUE:
        this.player2.teleport(this.world2);
        break;
      case ORANGE:
        this.player2.wall(this.world2);
        break;
    }

    switch (this.world3.color) {
      case BLUE:
        this.player3.teleport(this.world3);
        break;
      case ORANGE:
        this.player3.wall(this.world3);
        break;
    }
    switch (this.world4.color) {
      case BLUE:
        this.player4.teleport(this.world4);
        break;
      case ORANGE:
        this.player4.wall(this.world4);
        break;
    }

    textSize(32);
    fill("black");
    noStroke();
    text("Score: " + this.s, 520, 150);
  }

  livesGone() {
    let currentLives = document.getElementById("life-" + this.lives);
    console.log("actual live", currentLives);
    if (currentLives) {
      currentLives.style.backgroundColor = ORANGE;
      this.lives--;
    }
    if (this.lives === 0) {
      this.score = this.s;
      console.log("score", this.score);
      let gameOverContent = document.getElementById("game-over-content");
      gameOverContent.innerHTML = `
      Your score is: ${this.score}
      `;
      let gameOver = document.getElementById("game-over");
      gameOver.style.opacity = 10;
    }
  }
}
