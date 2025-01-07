import Player from "./player.js";
import BulletManager from "./bulletManager.js";
import Crosshair from "./crosshair.js";
import Spawnpoint from "./spawnpoint.js";
import Zombie from "./zombie.js";
import ZombieTwo from "./zombie2.js";
import ZombieThree from "./zombie3.js";
import ZombieFour from "./zombie4.js";
// import Crosshair from "./crosshair.js";

const gridHeight = 24;
const gridWidth = 30;
let x = 0;
let y = 0;

let gameState = false;

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

//top left spawnpoint+path
const spawnpoint1 = new Spawnpoint(2 * gridWidth, 2 * gridHeight);

/*
  grid taken from Garrits lesson; the snake game
*/
function drawGrid() {
  push();
  stroke(255, 255, 255, 0);
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

function youDied() {
  push();
  fill(255);
  textSize(50);
  text('You Died', 250, 180, 300, 200);
  pop();
}

function replay() {
  push();
  fill(255);
  textSize(15);
  text('press spacebar to replay', 300, 600, 300, 200);
  pop();
}

function keyReleased() {
  if (gameState === false) {
    if (key === " ") {
      gameState = true;
      console.log("does it work?")
    }
  }
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
  image(startScreen, 0, 0);
  keyReleased();

  if (gameState === true) {
      //game setup: background/obstacles, "non interactive"
  image(gameMap, 0, 0);
  drawGrid();
  drawObstacles(); // Draw obstacles (visible for testing)
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

  //zombie finishes the path and kills the player, game ends - game end screen display
  if (zombie.x === 330 && zombie.y === 408) {
    gameState = false;
    console.log("the first zombie ate you!");
    youDied();
    replay();
  }

  if (zombie2.x === 360 && zombie2.y === 360) {
    gameState = false;
    console.log("the second zombie ate you!");
    youDied();
    replay();
  }

  if (zombie3.x === 360 && zombie3.y === 432) {
    gameState = false;
    console.log("the third zombie ate you!");
    youDied();
    replay();
  }

  if (zombie4.x === 420 && zombie4.y === 408) {
    gameState = false;
    console.log("the fourth zombie ate you!");
    youDied();
    replay();
  }
  
  keyReleased();

  console.log(gameState);

}

window.draw = draw;