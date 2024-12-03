class BulletManager {
  constructor() {
    this.bullets = []; // Store bullets
  }

  fireBullet(x, y, angle) {
    // Push a new bullet to the array
    this.bullets.push({
      x: x,
      y: y,
      angle: angle,
      speed: 10
    });
  }

  updateBullets() {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      let bullet = this.bullets[i];
  
      // Move the bullet
      bullet.x += cos(bullet.angle) * bullet.speed;
      bullet.y += sin(bullet.angle) * bullet.speed;
  
      // Check if the bullet collides with any obstacle
      for (let obstacle of obstacles) {
        if (
          bullet.x > obstacle.x &&
          bullet.x < obstacle.x + obstacle.w &&
          bullet.y > obstacle.y &&
          bullet.y < obstacle.y + obstacle.h
          //insert zombie obtsacle logic
        ) {
          this.bullets.splice(i, 1); // Remove bullet on collision
          break;
        }
      }
    }
  }

  drawBullets() {
    // Draw all bullets
    for (let bullet of this.bullets) {
      fill(255, 255, 0);
      ellipse(bullet.x, bullet.y, 10, 10);
    }
  }
}

const bulletManager = new BulletManager();
export default bulletManager;