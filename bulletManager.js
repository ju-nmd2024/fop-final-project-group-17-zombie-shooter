// import Zombie from "./zombie.js";

export default class BulletManager {
  constructor() {
      this.bullets = []; // Array to store all bullets
  }

  fireBullet(x, y, angle) {
      this.bullets.push({
          x: x,
          y: y,
          angle: angle,
          speed: 10, // Adjust the speed as needed
      });
  }

  updateBullets(obstacles, zombies) {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
        let bullet = this.bullets[i];

        // Move the bullet
        bullet.x += Math.cos(bullet.angle) * bullet.speed;
        bullet.y += Math.sin(bullet.angle) * bullet.speed;

        // Check collision with obstacles
        for (let obstacle of obstacles) {
            if (
                bullet.x >= obstacle.x &&
                bullet.x <= obstacle.x + obstacle.w &&
                bullet.y >= obstacle.y &&
                bullet.y <= obstacle.y + obstacle.h
            ) {
                // Remove the bullet if it hits an obstacle
                this.bullets.splice(i, 1);
                break;
            }
        }

        // Check collision with zombies
        for (let j = zombies.length - 1; j >= 0; j--) {
            let zombie = zombies[j];
            let distance = dist(bullet.x, bullet.y, zombie.x, zombie.y); // Calculate distance

            if (distance < 12.5) { // Assume 12.5 is half the zombie diameter (collision threshold)
                // Remove both the bullet and the zombie
                this.bullets.splice(i, 1);
                zombies.splice(j, 1);
                break;
            }
        }
    }
}

  drawBullets() {
    fill(255, 0, 0); // Set bullet color
      for (let bullet of this.bullets) {
          ellipse(bullet.x, bullet.y, 5, 5); // Draw each bullet as a small circle
      }
  }
}