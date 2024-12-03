import Path from "./path.js";

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

    //ha en array med spawnpoint
    //ha en path som zombisarna går på
}