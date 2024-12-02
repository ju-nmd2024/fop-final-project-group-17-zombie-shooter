import zombie from "./zombie.js";
import player from "./player.js";
import bulletManager from "./bulletManager.js";

const gridLength = 24;
const gridSize = 30;
const dx = mouseX - player.x;
const dy = mouseY - player.y;
const angle = atan2(dy, dx);

function preload () {
  gameMap = loadImage ("map.png");
}

window.preload = preload;

function setup() {
  createCanvas(720, 720);
}

window.setup = setup;

/*
  grid taken from Garrits lesson; the snake game
*/
function drawGrid() {
  push();
  stroke(255, 255, 255);
  noFill();
  for (let x = 0; x < gridLength; x++) {
    for (let y = 0; y < gridLength; y++) {
      rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
  pop();
}

function drawCrosshair() {
  // Draw a crosshair at the mouse position
  stroke(255, 0, 0);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY); // Horizontal line
  line(mouseX, mouseY - 10, mouseX, mouseY + 10); // Vertical line
}

function mousePressed() {
  // Calculate the angle between the player and the mouse
  const dx = mouseX - 370; // Adjusted based on the translation
  const dy = mouseY - 400; // Adjusted based on the translation
  const angle = atan2(dy, dx);

  // Fire a bullet from the player's position, adjusted for the player's rotation
  const bulletX = 370 + cos(angle) * 35; // Adjust based on angle and translation
  const bulletY = 400 + sin(angle) * 35; // Adjust based on angle and translation

  // Fire the bullet
  bulletManager.fireBullet(bulletX, bulletY, angle);
}

window.mousePressed = mousePressed;

function draw() {
  image(gameMap, 0, 0);
  zombie.draw();
  drawCrosshair();
  drawGrid();

  // Update bullets and draw them
  bulletManager.updateBullets();
  bulletManager.drawBullets();

  // Translate the origin to the center.
  translate(370, 400);

  // Get the mouse's coordinates relative to the origin.
  let x = mouseX - 395;
  let y = mouseY - 400;

  // Calculate the angle between the mouse and the origin.
  let a = atan2(y, x);

  // Rotate
  rotate(a);
  player.draw(a);
}

window.draw = draw;

