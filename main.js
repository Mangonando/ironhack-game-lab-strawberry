// function setup() {
//     let canvas = createCanvas(1200, 800);
//     canvas.parent("canvas");
//   }

//   function draw() {
//     background(255);
  
//     fill(255);
//     rect(0, 0, width, height);
//     // fill(255);
//     // rect(p, 0, p*2, height/2);
//     // fill(255);
//     // rect(p, p, p*2, height/2);
//   }
//ends

const game = new Game();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    game.setup();
}

function draw() {
  game.draw();
}

