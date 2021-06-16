class Player {
    constructor(x, y) {
        this.x = Math.floor(Math.random() * 200) + 50;
        this.y = Math.floor(Math.random() * 200) + 50;
        this.diameter = 25;
    }

    teleport() {
        if (this.x > game.world.x + game.world.width - 0.5*this.diameter) {
            console.log("right squaaaaare")
            this.x = game.world.x + 0.5*this.diameter
        }
        if (this.x < game.world.x + 0.5*this.diameter) {
            console.log("left squaaaaare")
            this.x = game.world.x + game.world.width - 0.5*this.diameter
        }
        if (this.y > game.world.y + game.world.height - 0.5*this.diameter) {
            console.log("down squaaaaare")
            this.y = game.world.y + 0.5*this.diameter
        }
        if (this.y < game.world.y + 0.5*this.diameter) {
            console.log("up squaaaaare")
            this.y = game.world.y + game.world.height - 0.5*this.diameter
        }
    }
    // wall() {
    //     if (this.x < this.diameter/2 || 
    //         this.x > windowWidth - 0.5*this.diameter) {
    //     }
    //     if (this.y < this.diameter/2 || 
    //        this.y > windowHeight - this.diameter) {
    //     }
    // }

    draw() {
        clear();
        fill('rgb(51, 236, 255)')
        stroke('rgb(51, 236, 255)')
        ellipse(this.x, this.y, this.diameter, this.diameter);
        
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 5;
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 5;
        }
    
        if (keyIsDown(UP_ARROW)) {
            this.y -= 5;
        }
    
        if (keyIsDown(DOWN_ARROW)) {
            this.y += 5;
        } 
    }
}

