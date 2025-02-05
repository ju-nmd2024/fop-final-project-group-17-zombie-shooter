export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(x, y) {
    //the graphics of the player
    push();
    translate(0, 0);
    noStroke();

    //body
    fill(49, 54, 42);
    ellipse(0, 0, 35);
    push();

    //rifle
    rotate(-0.03);
    fill(33, 33, 32);
    rect(-5, +3, 50, 7);
    pop();

    //head
    fill(77, 51, 33);
    ellipse(0, 5, 20);
    pop();
  }
}
