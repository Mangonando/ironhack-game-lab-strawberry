class Game {
  constructor() {
    this.score = 0;
    this.timerValue = 0;
    // this.startButton;
    // this.timeIt;
    // this.time = 0;
    // this.running = 1;
    // this.music;
    this.lives = 3;
    // this.millisecond = millis()
    this.m = 0;
    this.s = 0;
    this.ms = 1;
  }

  setup() {
    this.world1 = new World(30, 20, 350, 150);
    this.player1 = new Player(50, 40, -0.5);
    this.world2 = new World(350, 250, 500, 250);
    this.player2 = new Player(400, 300, 0.5);
    // this.music = this.music = loadSound('POL-mad-run-short.wav', loaded)
    setInterval(this.timer,)
  }

  timer() {
    this.ms++;
    if (this.ms % 1000 === 0) {
      this.ms = 0;
      this.s++;
    }
  }
  // this.ms = millis();
  // textSize(32);
  // fill("black");
  // noStroke();
  // text("Milliseconds \nrunning: \n" + this.ms, 5, 40);

  draw() {
    this.timerValue;
    this.timer();
    //   fullscreen(true)

    clear();
    this.player1.draw();
    this.world1.draw();
    this.player2.draw();
    this.world2.draw();

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
    
    // this.timerValue++;
    textSize(32);
    fill("black");
    noStroke();
    text(this.s + ` : ` + this.ms, 200, 150);
    //     if (this.timerValue >= 10) {
    // text("00:" + this.timerValue, width / 2, height / 2);
    //     }
    //     if (this.timerValue < 10) {
    //       text("00.0" + this.timerValue, width / 2, height / 2);
    //     }
    // let millisecond = millis();
    // textSize(32);
    // fill('black');
    // noStroke();
    // text("00:" + millisecond, 500, 150);
    // textSize(32);
    // fill("black");
    // noStroke();

    // text(this.m, 500, 150);
    // text(this.s, 550, 150);
    // text(this.ms, 600, 150);
    // console.log(`${this.s}:${this.ms}`)
  }

  //   millis() {
  //     text('Milliseconds \nrunning: \n' + millisecond, 5, 40);
  //   }

  livesGone() {
    let currentLives = document.getElementById("life-" + this.lives);
    console.log("actual live", currentLives);
    if (currentLives) {
      currentLives.style.backgroundColor = ORANGE;
      this.lives--;
    }
    if (this.lives === 0) {
      let gameOver = document.getElementById("game-over");
      gameOver.style.opacity = 10;
    }
  }

  //   timeIt() {
  //     if (this.timerValue > 0) {
  //       this.timerValue++;
  //     }
  //   }
}
//   increment() {
//       console.log("increment", this.running)
//     if (this.running == 1) {
//       setTimeout(function () {
//         this.time++;
//         let mins = Math.floor(this.time / 10 / 60);
//         let secs = Math.floor((this.time / 10) % 60);
//         let tenths = this.time % 10;
//         if (mins < 10) {
//           mins = "0" + mins;
//         }
//         if (secs < 10) {
//           secs = "0" + secs;
//         }
//         // document.getElementById("output").innerHTML =
//         //   mins + ":" + secs + ":" + "0" + tenths;
//         console.log("time", mins + ":" + secs + ":" + "0" + tenths)
//         this.increment();
//       }, 100);
//     }
