import Zombie from "./zombie.js";
import Player from "./player.js";

function preload () {
  map = loadImage ("map.png");
}

window.preload = preload;

function setup() {
  createCanvas(720, 720);
}

window.setup = setup;

function draw() {
  image (map, 0, 0);
  zombie.draw();
  player.draw();
}

window.draw = draw;
