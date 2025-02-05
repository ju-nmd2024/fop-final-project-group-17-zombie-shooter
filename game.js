import Player from "./player.js";
import BulletManager from "./bulletManager.js";
import Spawnpoint from "./spawnpoint.js";
import Zombie from "./zombie.js";
import State from "./state.js";

//ideas and help from Bence Tuzson (intellectual property of Bence)

/** @type {Object} */
const grid = {
  height: 24,
  width: 30,
};

/**@type {Number} */
let x = 0;

/** @type {Number} */
let y = 0;

/** @type {*string} */
let gameState = "start";

/** @type {Map<string, State>} */
let gameStates = new Map();

/** @type {Map<string, Image>} */
let graphics = new Map();

/** @type {Map<string, Zombie>} */
let zombieTypes = new Map();

/** @type {Zombie[]} */
let zombies = [];

/** @type {Number} */
let score;

let highscore;
let spawnRarity = 5;

let generationWait = 30;

let generationElapsed;
let isWaiting;

let scorePerKill = 5;

let graphicsSource = {
  gameMap: "map.png",
  blurryMap: "blurrymap.png",
};

function setup() {
  createCanvas(720, 720);
  Object.entries(graphicsSource).forEach((source) => {
    graphics.set(source[0], loadImage(source[1]));
  });
  //console.log(graphics);

  highscore = getItem("high score");

  gameStates.set(
    "start",
    new State(() => {
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(4);
      textSize(100);
      textFont("Melted Monster");
      textAlign("center", "center");
      shadowedText("Undead Grid", width / 2, 200, 0, 10, 255);
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(1);
      textSize(20);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText(
        "Use your mouse and kill all the zombies before they kill you",
        width / 2,
        300,
        0,
        5,
        255
      );
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(3);
      textSize(50);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText("Press spacebar to start", width / 2, 600, 0, 7.5, 255);
      pop();
    }, graphics.get("blurryMap"))
  );

  gameStates.set(
    "game",
    new State(() => {
      //console.log(isWaiting);
      console.log(zombies);

      if (isWaiting) {
        //console.log(`${generationElapsed}\\${generationWait}`);
        generationElapsed++;
        if (generationWait === generationElapsed) {
          isWaiting = false;
        }
      } else {
        console.log("mókus");
        let rand = randomRange(1, spawnRarity, true);
        console.log(rand);
        if (rand === 1) {
          console.log("zglgbkgj");
          generateZombie(
            deepCopy(zombieTypes.get(randomRange(1, 4, true)).reset())
          );
          zombies[zombies.length - 1].speed = randomRange(1, 3, true);
        }
        isWaiting = true;
        generationElapsed = 0;
      }

      //game setup: background/obstacles, "non interactive"
      drawGrid();
      drawObstacles(); // Draw obstacles (visible for testing)
      // mousePressed();
      drawCrosshair();

      zombies.forEach((zombie) => {
        zombie.update();
      });

      //"physics" > bullet manager etc??
      // Update bullets and draw them
      let killedZombie = bulletManager.updateBullets(obstacles, zombies);
      bulletManager.drawBullets();

      if (killedZombie) {
        score += scorePerKill + killedZombie.speed;
      }

      push();

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
        if (
          zombie.x === zombie.endpoints.x &&
          zombie.y === zombie.endpoints.y
        ) {
          gameState = "gameover";
          lose();
          return;
          //replay();
        }
      });
    }, graphics.get("gameMap"))
  );

  gameStates.set(
    "gameover",
    new State(() => {
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(4);
      textSize(100);
      textFont("Melted Monster");
      textAlign("center", "center");
      shadowedText("Game Over", width / 2, 200, 0, 10, 255);
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(3);
      textSize(50);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText("Score", width / 2, 300, 0, 5, 255);
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(2);
      textSize(35);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText(score, width / 2, 350, 0, 5, 255);
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(3);
      textSize(50);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText("High Score", width / 2, 450, 0, 5, 255);
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(2);
      textSize(35);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText(highscore, width / 2, 500, 0, 5, 255);
      pop();
      push();
      fill(255);
      stroke(0, 0, 0);
      strokeWeight(3);
      textSize(50);
      textFont("Milky Nice Clean");
      textAlign("center", "center");
      shadowedText("Press spacebar to restart", width / 2, 600, 0, 7.5, 255);
      pop();
    }, graphics.get("blurryMap"))
  );

  zombieTypes.set(
    1,
    new Zombie(
      2 * grid.width,
      2 * grid.height,
      0,
      1,
      [
        { x: 7 * grid.width, y: 2 * grid.height },
        { x: 7 * grid.width, y: 6 * grid.height },
        { x: 12 * grid.width, y: 6 * grid.height },
        { x: 12 * grid.width, y: 9 * grid.height },
        { x: 10 * grid.width, y: 9 * grid.height },
        { x: 10 * grid.width, y: 13 * grid.height },
        { x: 7 * grid.width, y: 13 * grid.height },
        { x: 7 * grid.width, y: 17 * grid.height },
        { x: 11 * grid.width, y: 17 * grid.height },
      ],
      {
        x: 330,
        y: 408,
      }
    )
  );

  zombieTypes.set(
    2,
    new Zombie(
      23 * grid.width,
      2 * grid.height,
      0,
      1,
      [
        { x: 23 * grid.width, y: 11 * grid.height },
        { x: 18 * grid.width, y: 11 * grid.height },
        { x: 18 * grid.width, y: 2 * grid.height },
        { x: 13 * grid.width, y: 2 * grid.height },
        { x: 13 * grid.width, y: 13 * grid.height },
        { x: 12 * grid.width, y: 13 * grid.height },
        { x: 12 * grid.width, y: 15 * grid.height },
      ],
      {
        x: 360,
        y: 360,
      }
    )
  );

  zombieTypes.set(
    3,
    new Zombie(
      2 * grid.width,
      28 * grid.height,
      0,
      1,
      [
        { x: 2 * grid.width, y: 15 * grid.height },
        { x: 4 * grid.width, y: 15 * grid.height },
        { x: 4 * grid.width, y: 23 * grid.height },
        { x: 6 * grid.width, y: 23 * grid.height },
        { x: 6 * grid.width, y: 28 * grid.height },
        { x: 9 * grid.width, y: 28 * grid.height },
        { x: 9 * grid.width, y: 22 * grid.height },
        { x: 12 * grid.width, y: 22 * grid.height },
        { x: 12 * grid.width, y: 18 * grid.height },
      ],
      {
        x: 360,
        y: 432,
      }
    )
  );

  zombieTypes.set(
    4,
    new Zombie(
      23 * grid.width,
      28 * grid.height,
      0,
      1,
      [
        { x: 23 * grid.width, y: 23 * grid.height },
        { x: 20 * grid.width, y: 23 * grid.height },
        { x: 20 * grid.width, y: 20 * grid.height },
        { x: 23 * grid.width, y: 20 * grid.height },
        { x: 23 * grid.width, y: 17 * grid.height },
        { x: 17 * grid.width, y: 17 * grid.height },
        { x: 17 * grid.width, y: 22 * grid.height },
        { x: 15 * grid.width, y: 22 * grid.height },
        { x: 15 * grid.width, y: 17 * grid.height },
        { x: 14 * grid.width, y: 17 * grid.height },
      ],
      {
        x: 420,
        y: 408,
      }
    )
  );
}
window.setup = setup;

function preload() {}
window.preload = preload;

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
  for (let x = 0; x < grid.height; x++) {
    for (let y = 0; y < grid.height; y++) {
      rect(x * grid.width, y * grid.width, grid.width, grid.width);
    }
  }
  pop();
}

//ideas and help from Bence Tuzson (intellectual property of Bence)

function resetSettings() {
  score = 0;
  generationElapsed = 0;
  isWaiting = true;
  zombies = [];
  zombieTypes.forEach((zombie) => {
    // base zombie generation
    generateZombie(deepCopy(zombie));
  });
}

function shadowedText(str, x, y, offsetx, offsety, alpha) {
  push();
  fill(0, 0, 0, alpha);
  text(str, x + offsetx, y + offsety);
  pop();
  text(str, x, y);
}

function generateZombie(zombie) {
  zombies.push(zombie);
}

function deepCopy(obj) {
  // Check for null or non-object types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle dates
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  // Handle objects with constructor (instances of a class)
  let copy = Object.create(Object.getPrototypeOf(obj));

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
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
  { x: 310, y: 580, w: 50, h: 70 },
  { x: 420, y: 590, w: 60, h: 40 },
  { x: 480, y: 615, w: 30, h: 40 },
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

//ideas and help from Bence Tuzson (intellectual property of Bence)

function lose() {
  if (score > highscore) {
    highscore = score;
    storeItem("high score", highscore);
  }

  console.log(score);
}

function replay() {
  push();
  fill(255);
  textSize(15);
  text("press spacebar to replay", 300, 600, 300, 200);
  pop();
}

function randomRange(min, max, whole = false) {
  let num = Math.random() * (max - min) + min;
  return whole ? Math.floor(num) : num;
}

randomRange(10, 30);

function keyPressed() {
  console.log("yeyyyy");
  if (key === " ") {
    //console.log(gameState);
    switch (gameState) {
      case "start":
      case "gameover":
      case "won":
        resetSettings();
        gameState = "game";
        break;
    }
    //console.log(gameState);
    //console.log("does it work?");
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

// link to chatgpt conversation https://chatgpt.com/share/67a34c0e-6f20-8002-9aca-f7f6396397e3
