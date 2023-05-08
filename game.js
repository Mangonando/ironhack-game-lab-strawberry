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
    createCanvas(windowWidth, windowHeight);

    this.world1 = new World(
      windowWidth * 0.0156,
      windowHeight * 0.01852,
      windowWidth * 0.182,
      windowHeight * 0.1852
    );
    this.player1 = new Player(
      windowWidth * 0.1067,
      windowHeight * 0.1111,
      0.25,
      1
    );

    this.world2 = new World(
      windowWidth * 0.1563,
      windowHeight * 0.2315,
      windowWidth * 0.2604,
      windowHeight * 0.3241
    );
    this.player2 = new Player(
      windowWidth * 0.2865,
      windowHeight * 0.3935,
      0.25,
      0
    );

    this.world3 = new World(
      windowWidth * 0.0156,
      windowHeight * 0.2778,
      windowWidth * 0.1042,
      windowHeight * 0.3241
    );
    this.player3 = new Player(
      windowWidth * 0.0677,
      windowHeight * 0.4398,
      -0.5,
      1
    );

    this.world4 = new World(
      windowWidth * 0.4427,
      windowHeight * 0.0741,
      windowWidth * 0.182,
      windowHeight * 0.463
    );
    this.player4 = new Player(
      windowWidth * 0.5339,
      windowHeight * 0.3056,
      -0.5,
      0
    );

    // this.world1 = new World(30, 20, 350, 200);
    // this.player1 = new Player(205, 120, 0.25, 1);
    // this.world2 = new World(300, 250, 500, 350);
    // this.player2 = new Player(550, 425, 0.25, 0);
    // this.world3 = new World(30, 300, 200, 350);
    // this.player3 = new Player(130, 475, -0.5, 1);
    // this.world4 = new World(850, 80, 350, 500);
    // this.player4 = new Player(1025, 330, -0.5, 0);

    this.music = createAudio("POL-mad-run-preview.mp3");
    game.music.autoplay(true);
    // this.music = this.music = loadSound(, loaded)

    this.scoreTimer = setInterval(() => {
      if (this.lives === 0) {
        clearInterval(this.scoreTimer);
      } else {
        this.s++;
      }
    }, 1000);
  }

  draw() {
    clear();

    if (this.lives > 0) {
      this.player1.draw();
      this.world1.draw();
      this.player2.draw();
      this.world2.draw();
      this.player3.draw();
      this.world3.draw();
      this.player4.draw();
      this.world4.draw();
    }

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

    pop();
  }

  livesGone() {
    let currentLives = document.getElementById("life-" + this.lives);
    if (currentLives) {
      currentLives.style.backgroundColor = ORANGE;
      this.lives--;
    }
    if (this.lives === 0) {
      this.score = this.s;
      let gameOverContent = document.getElementById("game-over-content");
      gameOverContent.innerHTML = `
      Your score is: ${this.score}
      `;
      let gameOver = document.getElementById("game-over");
      gameOver.style.opacity = 10;
      gameOver = true;
    }
  }

  startAgain() {
    this.lives = 3;
    this.score = 0;
    this.timerValue = 0;
    this.s = 0;
    clearInterval(this.scoreTimer);

    this.setup();

    for (let i = 1; i <= 3; i++) {
      document.getElementById("life" + 1).style.backgroundColor = BLUE;
    }

    document.getElementById("game-over").style.opacity = 0;
  }
}
