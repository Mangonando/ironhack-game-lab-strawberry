class Game {
  constructor() {
    this.score = 0;
    // time
    // music
  }
  setup() {
    this.player = new Player(0, 0);
    this.world = new World(30, 20, 250, 250);
  }
  draw() {
    //   fullscreen(true)
    switch(this.world.color) {
        case BLUE:
            this.player.teleport();
            break;
        case ORANGE:
            this.player.wall();
            break;
    }  
    console.log("screen", window.screen)
    this.player.draw();
    this.world.draw();
    if (frameCount % 100 === 0) {
      if (this.world.color === BLUE) {
        this.world.color = ORANGE;
      } else if (this.world.color === ORANGE) {
        this.world.color = BLUE;
      }
    }
  }
}

