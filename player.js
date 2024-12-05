class Player {
  constructor (x, y) {
      this.x = x;
      this.y = y;
  }

  draw() {
    //the graphics of the player
      push();
      translate(370, 400);
      // let a = atan(mouseY, mouseX);
      // rotate(a);

      // // Get the mouse's coordinates relative to the origin.
      // this.x = mouseX - 395;
      // this.y = mouseY - 400;
      // // Calculate the angle between the mouse and the origin.
      // let a = atan2(y, x);
      // // Rotate
      // rotate(a, a);
      
      noStroke();
      //body
      fill(49, 54, 42);
      ellipse(this.x, this.y, 35);
      push();

      //rifle
      rotate(-0.03);
      fill(33, 33, 32);
      rect(this.x - 5, this.y + 3, 50, 10);
      pop();

      //head
      fill(77, 51, 33);
      ellipse(this.x, this.y + 5, 20);
      pop();
    }

  aim() {
    
    

  }

    update() {
      this.draw();
      this.aim();
    }
  
}

let player = new Player(50, 50);

function draw() {
  clear();
  player.draw();
  player.aim();
}