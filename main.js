let pressKey = false;

window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
  if(!pressKey) {
      document.getElementById('intro').style.display = 'none'
      document.getElementById('game').style.display = 'block'
    pressKey = true
  }
}, false);

const game = new Game();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    game.setup();
}

function draw() {
  game.draw();
}

