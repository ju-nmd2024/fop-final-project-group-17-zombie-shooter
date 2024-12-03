export class ZombieManager {
    constructor(spawnPoint, path) {
        this.spawnPoint = spawnPoint;
        this.path = path;
        this.zombies = [];
        this.spawnInterval = 2000; // Spawn a zombie every 2 seconds
        this.lastSpawnTime = 0;
    }

    spawnZombie() {
        const newZombie = new Zombie(this.spawnPoint.getSpawnPoint(), this.path);
        this.zombies.push(newZombie);
    }

    update(currentTime) {
        if (currentTime - this.lastSpawnTime > this.spawnInterval) {
            this.spawnZombie();
            this.lastSpawnTime = currentTime;
        }
        this.zombies.forEach(zombie => zombie.update());
    }

    draw() {
        this.zombies.forEach(zombie => zombie.draw());
    }
}