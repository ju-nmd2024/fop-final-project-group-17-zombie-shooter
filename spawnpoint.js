import Path from "./path.js";
import Zombie from "./zombie.js";

export default class Spawnpoint {
    constructor(x, y, path) {
        this.x = x;
        this.y = y;
        this.path = path;
        this.zombieArray = [];
    }

    spawnZombie() {
        this.zombieArray.push(new Zombie(this, 2));
    }

    // constructor(x, y, path) {
    //     this.x = x;
    //     this.y = y;
    //     this.path = path;
    //     this.zombieArray = [];
    //     this.spawnTimer = 0;
    //     this.spawnInterval = 3000;
    // }

    // spawnZombie() {
    //     const newZombie = new Zombie(this.x * 30, this.y * 30, this.path);
    //     this.zombieArray.push(newZombie);
    // }

    // update(currentTime) {
    //     if (currentTime - this.spawnTimer > this.spawnInterval) {
    //         this.spawnZombie();
    //         this.spawnTimer = currentTime;
    //     }
    //     for (let zombie of this.zombieArray) {
    //         zombie.draw();
    //     }
    // }

}