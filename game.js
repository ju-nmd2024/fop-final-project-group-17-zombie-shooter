import Player from "./player.js";
import BulletManager from "./bulletManager.js";
import Spawnpoint from "./spawnpoint.js";
import Zombie from "./zombie.js";
import ZombieTwo from "./zombie2.js";
import ZombieThree from "./zombie3.js";
import ZombieFour from "./zombie4.js";

const gridHeight = 24;
const gridWidth = 30;
let x = 0;
let y = 0;

let gameMap;
let startScreen;

function preload () {
  gameMap = loadImage ("map.png");
  startScreen = loadImage ("startscreen.png");
}
window.preload = preload;

function setup() {
  createCanvas(720, 720);
}

window.setup = setup;

// const player = new Player(0, 0);
const bulletManager = new BulletManager();
// const crosshair = new Crosshair(mouseX, mouseY);

/*
  grid taken from Garrits lesson; the snake game
*/
function drawGrid() {
  push();
  stroke(255, 255, 255, 50);
  noFill();
  for (let x = 0; x < gridHeight; x++) {
    for (let y = 0; y < gridHeight; y++) {
      rect(x * gridWidth, y * gridWidth, gridWidth, gridWidth);
    }
  }
  pop();
}

const obstacles = [
  { x: 140, y: 180, w: 80, h: 80 },
  { x: 450, y: 100, w: 40, h: 70 },
  { x: 500, y: 295, w: 60, h: 40 },
  { x: 560, y: 100, w: 60, h: 90 },
  { x: 140, y: 420, w: 70, h: 80 },
  { x: 530, y: 520, w: 40, h: 70 },
  { x: 215, y: 550, w: 40, h: 70 },
  { x: 625, y: 300, w: 30, h: 80 },
  { x: 565, y: 420, w: 60, h: 40 },
  { x: 240, y: 30, w: 130, h: 70 },
  { x: 50, y: 270, w: 30, h: 80 },
  { x: 310, y: 580, w:50, h: 70 },
  { x: 420, y: 590, w:60, h: 40 },
  { x: 480, y: 615, w:30, h: 40 },
];

function drawObstacles() {
  fill(0, 0, 0, 0); // insivisble obstacles
  noStroke(); // No border around the obstacles
  for (let obstacle of obstacles) {
    rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }
}

function drawCrosshair() {
  // Draw a crosshair at the mouse position
  push();
  stroke(255, 0, 0);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY); // Horizontal line
  line(mouseX, mouseY - 10, mouseX, mouseY + 10); // Vertical line
  pop();
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

const zombie = new Zombie(2 * gridWidth, 2 * gridHeight);
const zombie2 = new ZombieTwo(23 * gridWidth, 2 * gridHeight);
const zombie3 = new ZombieThree(2 * gridWidth, 28 * gridHeight);
const zombie4 = new ZombieFour(23 * gridWidth, 28 * gridHeight);

let zombies = [
  zombie,
  zombie2,
  zombie3,
  zombie4,
];

const player = new Player(x, y);

function draw() {
  //game setup: background/obstacles, "non interactive"
  image(gameMap, 0, 0);
  drawGrid();
  drawObstacles();
  // mousePressed();
  drawCrosshair();

  for (let zombie of zombies) {
    zombie.update();
  }

  //"physics" > bullet manager etc??
  // Update bullets and draw them
    bulletManager.updateBullets(obstacles, zombies);
    bulletManager.drawBullets();

  push();
    // Translate the origin to the center. - how do you make it have the center?
    translate(370, 400);
  
    // Get the mouse's coordinates relative to the origin.
    x = mouseX - 395;
    y = mouseY - 400;
  
    // Calculate the angle between the mouse and the origin.
    let aimRotation = atan2(y, x);
  
    // Rotate
    rotate(aimRotation);
    player.draw(-50, -5);
  pop();

}

window.draw = draw;