// class Game {
//     drawCanvas() {
//         clear();
//         stroke(0);
//         for(let i= 0; i<=1000; i+=100){
//             line(0, i, WIDTH, i); //horizontal lines - y changes
//             line(i, 0, i, HEIGHT); //vertical lines - x changes    
//           }
//           this.player.draw();
//     } 
// }

class Game {
    constructor() {
        this.score = 0;
        // time
        // music
    }
    setup() {
        this.player = new Player(0, 0);
        this.world = new World(250, 250);
}
    draw() {
        this.player.teleport();
        this.player.draw();
        this.world.draw();
        // strokeWeight(4);
        // noFill()
        // rect(this.world.x, this.world.y, 512, 512);
        // stroke('black')
        // fill('red')
        // circle(300, 300, 20);
        // square(30, 20, 55)
    }
}

