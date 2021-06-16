class Game {
  constructor() {
    this.score = 0;
    // this.timerValue = 0.001;
    // this.startButton;
    // this.timeIt;
    // this.time = 0;
    // this.running = 1;
    // this.music;
  }

  setup() {
    // this.music = this.music = loadSound('POL-mad-run-short.wav', loaded)
    this.player = new Player(0, 0);
    this.world = new World(30, 20, 250, 250);
    // setInterval(this.timeIt, 100);
    // this.increment();
    // this.player2 = new Player(300, 300);
    // this.world2 = new World(300, 300, 250, 250);
  }

  draw() {
    //   fullscreen(true)
    // console.log("players", this.player1, this.player2);
    this.player.draw();
    this.world.draw();
    // this.player2.draw();
    // this.world2.draw();
    switch (this.world.color) {
      case BLUE:
        this.player.teleport();
        break;
      case ORANGE:
        this.player.wall();
        break;
    }
//     if (this.timerValue >= 10) {
//       text("00:" + this.timerValue, width / 2, height / 2);
//     }
//     if (this.timerValue < 10) {
//       text("00.0" + this.timerValue, width / 2, height / 2);
//     }
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

// if (frameCount % 100 === 0) {
//   if (this.color === BLUE) {
//     this.color = ORANGE;
//   } else if (this.color === ORANGE) {
//     this.color = BLUE;
//   }
// }

//    draw() {
//     //   fullscreen(true)
//     console.log("players", this.player1, this.player2)
//     this.player1.draw();
//     this.world1.draw();
//     switch (this.world1.color) {
//       case BLUE:
//         this.player1.teleport();
//         break;
//       case ORANGE:
//         this.player1.wall();
//         break;
//     }
//     this.player2.draw();
//     this.world2.draw();
//     switch (this.world2.color) {
//       case BLUE:
//         this.player2.teleport();
//         break;
//       case ORANGE:
//         this.player2.wall();
//         break;
//     }
//    }
