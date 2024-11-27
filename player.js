export default class Player {
    constructor (x, y) {
        this.x = x;
        this.y = y;

    }
    draw() {
        // translate(250, 275);
        rect(this.x, this.y, 70, 50);
    }

}

let player = new Player(0, 0);
let playerX = player.x;
let playerY = player.y;

function draw() {
    clear();

    let playerX = mouseX - 50;
    let playerY = mouseY - 50;
  
    // Calculate the angle between the mouse and the origin.
    let a = atan2(playerX, playerY);

    rotate(a);
    player.draw();
    // player.x = mouseX-250;
    // player.y = mouseY-275;
    


}