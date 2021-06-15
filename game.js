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
        this.world = new World(30, 20, 250);
}
    draw() {
        this.player.teleport();
        // this.player.wall()
        this.player.draw();
        this.world.draw();
    }
}

