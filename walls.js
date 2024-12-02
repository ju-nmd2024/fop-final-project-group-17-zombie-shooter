export default class Wall {
    constructor (x,y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    //Draw the wall
    draw () {
        noStroke();
        fill (0, 10);
        rect (this.x, this.y, this.width, this.height);

    // Check if a point collides with this wall
    collides(nextX, nextY, playerW, playerH); {
        return (
            nextX + 13 < this.x + this.width &&
            nextX + playerW - 13 > this.x &&
            nextY + 13 < this.y + this.height &&
            nextY + playerH - 13 > this.y
        );
    }
    }
}