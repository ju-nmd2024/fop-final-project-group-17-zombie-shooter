
class Player {
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

function drawCrosshair() {
  // Draw a crosshair at the mouse position
  stroke(255, 0, 0);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY); // Horizontal line
  line(mouseX, mouseY - 10, mouseX, mouseY + 10); // Vertical line
}

let player = new Player(-25, -25);
// let playerX = player.x;
// let playerY = player.y;

function mousePressed() {
  // Calculate the angle for shooting
  let dx = mouseX - player.x;
  let dy = mouseY - player.y;
  let angle = atan2(dy, dx);
}

function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];
    // Move the bullet in its direction
    bullet.x += cos(bullet.angle) * bullet.speed;
    bullet.y += sin(bullet.angle) * bullet.speed;

    // Draw the bullet
    fill(255, 255, 0);
    ellipse(bullet.x, bullet.y, 10, 10);

    // Remove the bullet if it goes off-screen
    if (bullet.x < 0 || bullet.x > width || bullet.y < 0 || bullet.y > height) {
      bullets.splice(i, 1);
    }
  }
}

function draw() {
  clear();
/*
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
    */
  
    
    let bullets = []; // Array to store bullets
    drawCrosshair(); // Draw the crosshair
    
    // Calculate the angle between the player and the mouse
    let dx = mouseX - player.x;
    let dy = mouseY - player.y;
    let angle = atan2(dy, dx);
    
      // Draw the player
      player.draw(angle);
    
      // Update and draw bullets
      updateBullets();
    
      // Add a new bullet to the array
      bullets.push({
        x: player.x + cos(angle) * 110, // Start from the rifle tip
        y: player.y + sin(angle) * 110,
        angle: angle,
        speed: 2
      });
    }
    
