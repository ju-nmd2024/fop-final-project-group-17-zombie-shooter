import Bullet from "./bullets.js";

export default class BulletManager {
  constructor() {
    this.bullets = [];
  }

  fireBullet(x, y, angle) {
    this.bullets.push(new Bullet(x, y, angle));
  }

  updateAndDraw(width, height) {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const bullet = this.bullets[i];
      bullet.update();
      bullet.draw();

      // Remove bullets that are off-screen
      if (bullet.isOffScreen(width, height)) {
        this.bullets.splice(i, 1);
      }
    }
  }
}