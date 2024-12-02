import zombie from "./zombie.js";
import player from "./workingshooter.js";

const gridLength = 24;
const gridSize = 30;

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

function draw() {
  image (gameMap, 0, 0);
  zombie.draw();
  player.draw();
  drawGrid();

  push();
  // Translate the origin to the center. - how do you make it have the center?
  translate(370, 400);

  // Get the mouse's coordinates relative to the origin.
  x = mouseX - 395;
  y = mouseY - 400;

  // Calculate the angle between the mouse and the origin.
  let a = atan2(y, x);

  // Rotate
  rotate(a);
  player.draw(-50, -5);
  pop();

}

window.draw = draw;
