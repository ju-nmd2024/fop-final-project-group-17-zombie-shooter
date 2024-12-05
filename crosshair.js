class Crosshair {
    constructor(x, y) {
        x = mouseX;
        y = mouseY;
    }
    
    drawCrosshair() {
        // Draw a crosshair at the mouse position
      stroke(255, 0, 0);
      line(mouseX - 10, mouseY, mouseX + 10, mouseY); // Horizontal line
      line(mouseX, mouseY - 10, mouseX, mouseY + 10); // Vertical line
    }

    update() {
        this.drawCrosshair();
    }
}

//when crosshair is not in main game file, it works


let crosshair = new Crosshair(mouseX, mouseY);

function draw() {
    clear();
    crosshair.update();
}