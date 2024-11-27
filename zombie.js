class Zombie {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        fill (50, 150, 100);
        rect(this.x, this.y, 75, 50);
    }

}

let zombie = new Zombie(100, 100);
let zombieX = zombie.x;

function draw() {
    clear();
    zombie.draw();
        zombie.x++;
        zombie.y++;


}

