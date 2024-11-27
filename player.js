function setup() {
    createCanvas(500, 500);

  }
  
function draw() {
    background(200);
    // Translate the origin to the center.
    translate(250, 250);
  
    // Get the mouse's coordinates relative to the origin.
    let x = mouseX - 250;
    let y = mouseY - 250;
  
    // Calculate the angle between the mouse and the origin.
    let a = atan2(y, x);
  
    // Rotate
    rotate(a);
  
    // Draw the shape
    rect(-30, -5, 60, 10);
  }