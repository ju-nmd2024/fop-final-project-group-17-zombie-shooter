import Position from "./position";

export default class Zombie {

// half from my brother, is this what is needed for the movement plus spawnpoint things?
    constructor(spawnpoint, speed) {
        this.x = spawnpoint.x;
        this.y = spawnpoint.y;
        this.speed = speed;
                // this.currentWaypointIndex = 0;
                // this.spawnPoint = spawnPoint;
    }

    //graphics of the zombie
    draw() {
        fill(20, 75, 50);
        ellipse(this.x, this.y, 25, 25); // drawn as a circle for simplicity
    }
            
    update() {
        this.y += 0.1;
        this.x += 1;
    }

}



//we need to add zombie collisison, zombie spawn rate