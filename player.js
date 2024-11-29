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

    drawCrosshair(x, y) {
      // Draw a crosshair at the mouse position
      stroke(255, 0, 0);
      line(mouseX - 10, mouseY, mouseX + 10, mouseY); // Horizontal line
      line(mouseX, mouseY - 10, mouseX, mouseY + 10); // Vertical line
    }
      
    // aim() {
    //   //make it into a function and call in the main game.js file
    
    //   // Translate the origin to the center. - how do you make it have the center?
    //   translate(275, 250);
    
    //   // Get the mouse's coordinates relative to the origin.
    //   x = mouseX - 275;
    //   y = mouseY - 250;
    
    //   // Calculate the angle between the mouse and the origin.
    //   let aimRotation = atan2(y, x);
    
    //   // Rotate
    //   rotate(aimRotation);
      
    // }
  
}

let player = new Player(-25, -25);
// let playerX = player.x;
// let playerY = player.y;

function draw() {
  player.draw();
  player.drawCrosshair();

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
    player.draw(-50, -5);
    // Draw the shape
    // rect(-30, -5, 60, 10);
  
 
  }