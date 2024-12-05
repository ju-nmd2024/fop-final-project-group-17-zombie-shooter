import { waypoints } from "./waypoints";

export default class ZombieOne {
    constructor(x, y) {
        this.waypointIndex = 0;
        this.speed = 2;
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(20, 75, 50);
        ellipse(this.x, this.y, 25, 25); // drawn as a circle for simplicity
    }

    update() {
        // this.draw();
        // this.y += 0.1;

        const waypoint = waypoints[this.waypointIndex];

        if (this.x < waypoint.x ) {
            this.x = this.x + this.speed;
            }
        if (this.y < waypoint.y ) {
            this.y = this.y + this.speed;
            }
            
        if (this.y === waypoint.y && this.x === waypoint.x) {
            this.waypointIndex++;
            console.log(this.waypointIndex);
        }
    
    }
    
}



// const zombie = new ZombieOne (2 * 30, 2 * 24); 

// function draw() {
//     clear();
//     zombie.update();
// }