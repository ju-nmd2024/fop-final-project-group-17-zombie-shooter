
class Player {
  constructor (x, y) {
      this.x = x;
      this.y = y;

  }

  draw(x, y) {

      push();
      translate(0, 0);
      noStroke();
      //body
      fill(49, 54, 42);
      // rect(this.x, this.y, 50, 50);
      ellipse(0, 0, 50);

      push();
      //rifle
      rotate(-0.03);
      fill(33, 33, 32);
      rect(-5, +10, 70, 10);
      pop();

      //head
      fill(77, 51, 33);
      // rect(-5, -10, 25, 25);
      ellipse(0, 5, 30);
      pop();
  }

}

let player = new Player(-25, -25);
// let playerX = player.x;
// let playerY = player.y;

function draw() {
  clear();
    // Translate the origin to the center. - how do you make it have the center?
    translate(275, 250);
  
    // Get the mouse's coordinates relative to the origin.
    x = mouseX - 275;
    y = mouseY - 250;
  
    // Calculate the angle between the mouse and the origin.
    let a = atan2(y, x);
  
    // Rotate
    rotate(a);
    player.draw(-50, -5);
    // Draw the shape
    // rect(-30, -5, 60, 10);
  }