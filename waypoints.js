class PathOne {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    draw (x, y) {
        stroke(255);
        //maybe i can change it to vertexes?
        line(45, 45, 195, 45);
        line(195, 45, 195, 140);
        line(195, 140, 350, 140);
        line();
    }
}

let pathTopLeft = new PathOne(0, 0);

// function pathFirst() {
//     push();
//     // beginShape();
//     stroke(255);
//     //maybe i can change it to vertexes?
//     line(45, 45, 195, 45);
//     line(195, 45, 195, 140);
//     line(195, 140, 350, 140);
//     line();
//     // endShape();
//     pop();
//   }

  function draw() {
    pathTopLeft.draw();
  }