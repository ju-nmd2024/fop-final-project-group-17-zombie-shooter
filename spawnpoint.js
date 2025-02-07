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
}