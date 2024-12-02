class Obstacle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    // Check if a point (bullet) is inside the obstacle
    collidesWith(x, y) {
      return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
    }
  
    // Optionally, you can draw the obstacles (for debugging)
    draw() {
      noFill();
      stroke(255, 0, 0); // Red for visibility
      rect(this.x, this.y, this.w, this.h);
    }
  }
  
  // Create obstacles
  const obstacles = [
    new Obstacle(150, 150, 100, 30), // Example obstacle 1
    new Obstacle(300, 300, 150, 40)  // Example obstacle 2
  ];