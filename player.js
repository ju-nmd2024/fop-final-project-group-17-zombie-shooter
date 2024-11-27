
class Player {
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
    // Translate the origin to the center. - needs to be fixed
    translate(250, 250);
  
    // Get the mouse's coordinates relative to the origin.
    let x = mouseX - 250;
    let y = mouseY - 250;
  
    // Calculate the angle between the mouse and the origin.
    let a = atan2(y, x);
  
    // Rotate
    rotate(a);
    player.draw(-50, -25);
    // Draw the shape
    rect(-30, -5, 60, 10);
  }