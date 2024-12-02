class BulletManager {
  constructor() {
    this.bullets = [];
  }

  fireBullet(x, y, angle) {
    this.bullets.push({
      x: x,
      y: y,
      angle: angle,
      speed: 15
    });
  }

  updateBullets() {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      let bullet = this.bullets[i];

      // Move the bullet
      bullet.x += cos(bullet.angle) * bullet.speed;
      bullet.y += sin(bullet.angle) * bullet.speed;

      // Check for collision with obstacles
      for (let j = 0; j < obstacles.length; j++) {
        if (obstacles[j].collidesWith(bullet.x, bullet.y)) {
          this.bullets.splice(i, 1); // Remove bullet if it collides
          break;
        }
      }
    }
  }

  drawBullets() {
    for (let bullet of this.bullets) {
      fill(255, 255, 0); // Bullet color
      ellipse(bullet.x, bullet.y, 10, 10);
    }
  }
}

const bulletManager = new BulletManager();
export default bulletManager;