import Zombie from "./zombie.js";
import Player from "./player.js";


function setup() {
  createCanvas(800, 600);
}

window.setup = setup;

function draw() {
  background(247, 222, 178);
  zombie.draw();
  player.draw();
}

window.draw = draw;

