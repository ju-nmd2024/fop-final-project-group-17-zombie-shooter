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
    // Loop through all bullets and move them
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      let bullet = this.bullets[i];
      // Update bullet position based on angle
      bullet.x += cos(bullet.angle) * bullet.speed;
      bullet.y += sin(bullet.angle) * bullet.speed;

      // Remove bullet if it goes off-screen
      if (bullet.x < 0 || bullet.x > width || bullet.y < 0 || bullet.y > height) {
        this.bullets.splice(i, 1);
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