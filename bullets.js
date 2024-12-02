export default class Bullet {
    constructor(x, y, angle, speed = 10) {
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.speed = speed;
      this.radius = 5; // Size of the bullet
    }
  
    update() {
      // Move the bullet in the direction it's fired
      this.x += cos(this.angle) * this.speed;
      this.y += sin(this.angle) * this.speed;
    }
  
    draw() {
      fill(255, 255, 0); // Yellow color for bullets
      noStroke();
      ellipse(this.x, this.y, this.radius * 2);
    }
  
    isOffScreen(width, height) {
      // Check if the bullet is out of canvas bounds
      return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
    }
  }