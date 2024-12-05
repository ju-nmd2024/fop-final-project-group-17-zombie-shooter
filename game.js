import player from "./player.js";
import bulletManager from "./bulletManager.js";
import Spawnpoint from "./spawnpoint.js";
// import Position from "./position.js";
import Zombie from "./zombie.js";


const gridHeight = 24;
const gridWidth = 30;
const dx = mouseX - player.x;
const dy = mouseY - player.y;
// const angle = atan2(dy, dx);

// const path1 = [
//   { x: 7, y: 2 },
//   { x: 7, y: 5 },
//   { x: 12, y: 5 },
//   { x: 12, y: 8 },
//   { x: 10, y: 8 },
//   { x: 8, y: 11 },
//   { x: 8, y: 14 },
//   { x: 11, y: 14 },
// ];

//top left spawnpoint+path
const spawnpoint1 = new Spawnpoint(2 * gridWidth, 2 * gridHeight);
// const spawnpoint1 = new Spawnpoint(2 * gridWidth, 2 * gridHeight, new Path(
//   new Position (7, 2),
//   new Position (7, 5),
//   new Position (12, 5),
//   new Position (12, 8),
//   new Position (10, 8),
//   new Position (10, 11),
//   new Position (8, 11),
//   new Position (8, 14),
//   new Position (11, 14)
// ));

// const zombie1 = new Zombie(spawnpoint1, 2);

// // //top right spawnpoint+path
// const spawnpoint2 = new Spawnpoint(23, 2, new Path(
//   new Position (23, 10),
//   new Position (18, 10),
//   new Position (18, 2),
//   new Position (14, 2),
//   new Position (14, 11),
//   new Position (13, 11),
//   new Position (13, 12)
// ));
// // bottom left spawnpoint+path
// const spawnpoint3 = new Spawnpoint(2, 23, new Path(
//   new Position (2, 13),
//   new Position (4, 13),
//   new Position (2, 19),
//   new Position (6, 19),
//   new Position (6, 23),
//   new Position (10, 23),
//   new Position (10, 18),
//   new Position (13, 15)
// ));
// //bottom right spawnpoint+path
// const spawnpoint4 = new Spawnpoint(23, 23, new Path(
//   new Position (13, 19),
//   new Position (2, 19),
//   new Position (20, 16),
//   new Position (23, 16),
//   new Position (23, 14),
//   new Position (18, 14),
//   new Position (18, 18),
//   new Position (15, 18),
//   new Position (15, 14),
//   new Position (14, 14)
// ));

window.preload = preload;

function preload () {
  gameMap = loadImage ("map.png");
  startScreen = loadImage ("startscreen.png");
}

  // // Initialize the ZombieManager
  // zombieManager = new ZombieManager(spawnPoint, path);

// window.preload = preload;

function setup() {
  createCanvas(720, 720);
  // loadImage ("map.png"); // gameMap =  //is it supposed to be here or in the perload thing?
  // loadImage ("startscreen.png"); //startScreen = 
}

window.setup = setup;

/*
  grid taken from Garrits lesson; the snake game
*/
function drawGrid() {
  push();
  stroke(255, 255, 255);
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
  fill(0, 0, 0, 0); // Red with some transparency for testing
  noStroke(); // No border around the rectangles
  for (let obstacle of obstacles) {
    rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }
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
// let zombie = new Zombie(100,100);

// //zombie updating?
// let lastSpawnTime = 0;
// const spawnInterval = 2000; // Spawn zombies every 2 seconds

// function spawnZombies() {
//     spawnpoints.forEach((spawnpoint) => {
//         spawnpoint.spawnZombie(); // Spawn one zombie per spawn point
//     });
// }

// function updateZombies() {
//     spawnpoints.forEach((spawnpoint) => spawnpoint.updateZombies());
// }

// function drawZombies() {
//     spawnpoints.forEach((spawnpoint) => spawnpoint.drawZombies());
// }

//ZOMBIE TRYOUTS
const zombie = new Zombie(spawnpoint1, 1);
// const zombie1 = new ZombieOne(10, 10);



function draw() {
  image(gameMap, 0, 0);
  drawCrosshair();
  drawGrid();
  zombie.update();
  zombie.draw();


  drawObstacles(); // Draw obstacles (visible for testing)


  // //taken from
  // const currentTime = millis();
  // if (currentTime - lastSpawnTime > spawnInterval) {
  //     spawnZombies();
  //     lastSpawnTime = currentTime;
  // }

  // updateZombies();
  // drawZombies();

  // if (spawnpoint1.zombieArray.length === 0) {
  //   spawnpoint1.spawnZombie();
  // }

  // from my brother i think, array from spawnpoint one, topleft corner
  // for (i = 0; i < spawnpoint1.zombieArray.length; i++) {
  //   let zombie = spawnpoint1.zombieArray[i];
  //   zombie.update();
  //   zombie.draw();
  //   }

  // Update bullets and draw them
  bulletManager.updateBullets();
  bulletManager.drawBullets();

  push();
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
  pop();

}

window.draw = draw;