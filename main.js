let gameStarted = false;
let gameOver = false;

window.addEventListener(
  "keydown",
  function (e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
    if (!gameStarted) {
      document.getElementById("intro").style.display = "none";
      document.getElementById("game").style.display = "block";
      game.setup();
      gameStarted = true;
    } else if (gameOver) {
      document.getElementById("game-over").style.opacity = 0;
      game.startAgain();
      gameOver = false;
    }
  },
  false
);

const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  canvas.center();
}

function draw() {
  if (gameStarted) {
    game.draw();
  }
  if (game.lives === 0) {
    gameOver = true;
  }
}
