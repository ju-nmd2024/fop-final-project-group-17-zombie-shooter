export default class Player {
  constructor (x, y) {
      this.x = x;
      this.y = y;
  }

  draw(x, y) {
    //the graphics of the player
      push();
      translate(0, 0);
      noStroke();

      //body
      fill(49, 54, 42);
      ellipse(0, 0, 35);
      push();

      //rifle
      rotate(-0.03);
      fill(33, 33, 32);
      rect(-5, +3, 50, 7);
      pop();

      //head
      fill(77, 51, 33);
      ellipse(0, 5, 20);
      pop();
    }

  }    

let player = new Player(-25, -25);
// let playerX = player.x;
// let playerY = player.y;

function draw() {
  player.draw();

  clear();

    // Translate the origin to the center. - how do you make it have the center?
    translate(275, 250);
  
    // Get the mouse's coordinates relative to the origin.
    x = mouseX - 275;
    y = mouseY - 250;
  
    // Calculate the angle between the mouse and the origin.
    let aimRotation = atan2(y, x);
  
    // Rotate
    rotate(aimRotation);
    player.draw(-50, -5 );
}