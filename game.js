import Player from "./player.js";
import BulletManager from "./bulletManager.js";
import Spawnpoint from "./spawnpoint.js";
import Zombie from "./zombie.js";
import State from "./state.js";

const gridHeight = 24;
const gridWidth = 30;
let x = 0;
let y = 0;

let gameState = "start";
let gameStates = new Map();
let graphics = new Map();
  /**
   *  @type {Map<string, Zombie>}
   */
  let zombieTypes = new Map();
  

let zombies = [];

let maxZombies = 20;
let zombieCount = 0;
let spawnProbability = 300;

let graphicsSource = {
  gameMap: "map.png",
  youDied: "youdied.png",
  youWon: "youwon.png",
  startScreen: "startscreen720space.png"
}

function setup() {
  createCanvas(720, 720);
  Object.entries(graphicsSource).forEach((source) => {
    graphics.set(source[0], loadImage(source[1]))
  })
  console.log(graphics);
    
  gameStates.set(
    "start",
    new State(() => {

    }, graphics.get("startScreen"))
  )
  
  gameStates.set(
    "game",
    new State(() => {
      console.log("meow")
          //game setup: background/obstacles, "non interactive"
      drawGrid();
      drawObstacles(); // Draw obstacles (visible for testing)
      // mousePressed();
      drawCrosshair();
  
      zombies.forEach((zombie) => {
        zombie.update();
      })
  
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
      
  
      zombies.forEach((zombie) => {
        //console.log(zombie);
        //zombie finishes the path and kills the player, game ends - game end screen display
        if (zombie.x === zombie.endpoints.x && zombie.y === zombie.endpoints.y) {
          gameState = "died";
          lose();
          //replay();
        }
      })
    }, graphics.get("gameMap"))
  )
  
  gameStates.set(
    "won",
    new State(() => {
      
    }, graphics.get("youWon"))
  )
  
  gameStates.set(
    "died",
    new State(() => {
      
    }, graphics.get("youDied"))
  )
  
  
  zombieTypes.set(
    1,
    new Zombie(2 * gridWidth, 2 * gridHeight, 0, 3,
      [
        { x: 7 * gridWidth, y: 2 * gridHeight},
        { x: 7 * gridWidth, y: 6 * gridHeight},
        { x: 12 * gridWidth, y: 6 * gridHeight},
        { x: 12 * gridWidth, y: 9 * gridHeight},
        { x: 10 * gridWidth, y: 9 * gridHeight},
        { x: 10 * gridWidth, y: 13 * gridHeight},
        { x: 7* gridWidth, y: 13 * gridHeight},
        { x: 7 * gridWidth, y: 17 * gridHeight},
        { x: 11 * gridWidth, y: 17 * gridHeight},
      ],
      {
        x: 330,
        y: 408
      }
    )
  )
  
  zombieTypes.set(
    2,
    new Zombie(23 * gridWidth, 2 * gridHeight, 0, 2,
      [
        { x: 23 * gridWidth, y: 11 * gridHeight},
        { x: 18 * gridWidth, y: 11 * gridHeight},
        { x: 18 * gridWidth, y: 2 * gridHeight},
        { x: 13 * gridWidth, y: 2 * gridHeight},
        { x: 13 * gridWidth, y: 13 * gridHeight},
        { x: 12 * gridWidth, y: 13 * gridHeight},
        { x: 12* gridWidth, y: 15 * gridHeight},
      ],
      {
        x: 360,
        y: 360
      }
    )
  )
  
  zombieTypes.set(
    3,
    new Zombie(2 * gridWidth, 28 * gridHeight, 0, 1,
      [
        { x: 2 * gridWidth, y: 15 * gridHeight},
        { x: 4 * gridWidth, y: 15 * gridHeight},
        { x: 4 * gridWidth, y: 23 * gridHeight},
        { x: 6 * gridWidth, y: 23 * gridHeight},
        { x: 6 * gridWidth, y: 28 * gridHeight},
        { x: 9 * gridWidth, y: 28 * gridHeight},
        { x: 9* gridWidth, y: 22 * gridHeight},
        { x: 12 * gridWidth, y: 22 * gridHeight},
        { x: 12 * gridWidth, y: 18 * gridHeight},
      ],
      {
        x: 360,
        y: 432
      }
    )
  )
  
  zombieTypes.set(
    4,
    new Zombie(23 * gridWidth, 28 * gridHeight, 0, 1,
      [
        { x: 23 * gridWidth, y: 23 * gridHeight},
        { x: 20 * gridWidth, y: 23 * gridHeight},
        { x: 20 * gridWidth, y: 20 * gridHeight},
        { x: 23 * gridWidth, y: 20 * gridHeight},
        { x: 23 * gridWidth, y: 17 * gridHeight},
        { x: 17 * gridWidth, y: 17 * gridHeight},
        { x: 17 * gridWidth, y: 22 * gridHeight},
        { x: 15 * gridWidth, y: 22 * gridHeight},
        { x: 15 * gridWidth, y: 17 * gridHeight},
        { x: 14 * gridWidth, y: 17 * gridHeight},
      ],
      {
        x: 420,
        y: 408
      }
    )
  )
  
  zombieTypes.forEach((zombie, i) => {
    zombies.push(zombie);
  })
  console.log("cicaaaaaa");
  zombies.forEach((zombie) => {
    console.log(zombie);
  })
}


function preload () {
  
}
window.preload = preload;



window.setup = setup;

// const player = new Player(0, 0);
const bulletManager = new BulletManager();
// const crosshair = new Crosshair(mouseX, mouseY);

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

function lose() {
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

function randomRange(min, max, whole = false) {
  let num = Math.random() * (max - min) + min;
  return whole ? Math.round(num) : num;
}

randomRange(10, 30)

function keyPressed() {
  console.log("yeyyyy")
  if (key === " ") {
    console.log(gameState)
    switch (gameState) {
      case "start":
      case "died":
      case "won":
        gameState = "game";
        break

    }
    console.log(gameState)
    console.log("does it work?")
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
window.keyPressed = keyPressed;

//zombie classes array, nrGenfor spawning
//checking if all the class arrays are empty you win
//for loop/while loop

const player = new Player(x, y);

function draw() {
  clear();
  gameStates.get(gameState).run();
  //console.log(gameState);

}

window.draw = draw;

