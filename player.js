class Player {
    constructor(x, y) {
        this.x = 50;
        this.y = 50;
    }
    teleport() {

    }
    draw() {
        clear();
        fill('rgb(51, 236, 255)')
        stroke('rgb(51, 236, 255)')
        ellipse(this.x, this.y, 25, 25);
        
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

