class PlayerOne {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(angle) {
    push();
    translate(this.x, this.y); // Translate to player's position
    rotate(angle); // Rotate the player toward the mouse

    noStroke();
    // Body
    fill(49, 54, 42);
    ellipse(0, 0, 50);

    // Rifle
    push();
    rotate(-0.03); // Slight tilt for rifle
    fill(33, 33, 32);
    rect(-5, 10, 70, 10);
    pop();

    // Head
    fill(77, 51, 33);
    ellipse(0, 5, 30);
    pop();
  }
}

let player;
let bullets = []; // Array to store bullets


  player = new PlayerOne(width / 2, height / 2); // Initialize the player at the canvas center


function draw() {
    clear();
  drawCrosshair(); // Draw the crosshair

  // Calculate the angle between the player and the mouse
  let dx = mouseX - player.x;
  let dy = mouseY - player.y;
  let angle = atan2(dy, dx);

  // Draw the player
  player.draw(angle);

  // Update and draw bullets
  updateBullets();
}

function drawCrosshair() {
  // Draw a crosshair at the mouse position
  stroke(255, 0, 0);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY); // Horizontal line
  line(mouseX, mouseY - 10, mouseX, mouseY + 10); // Vertical line
}

function mousePressed() {
  // Calculate the angle for shooting
  let dx = mouseX - player.x;
  let dy = mouseY - player.y;
  let angle = atan2(dy, dx);

  // Add a new bullet to the array
  bullets.push({
    x: player.x + cos(angle) * 110, // Start from the rifle tip
    y: player.y + sin(angle) * 110,
    angle: angle,
    speed: 10
  });
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