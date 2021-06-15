const game = new Game();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    game.setup();
}

function draw() {
  game.draw();
}

