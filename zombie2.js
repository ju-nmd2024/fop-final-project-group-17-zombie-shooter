import { waypoints2 } from "./waypoints";

class Zombie2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // { position = { x: 0, y: 0} }
        // this.position = position;
        this.waypointIndex = 0;

        this.speed = 2;
    }

    draw() {
        fill(20, 75, 50);
        ellipse(this.x, this.y, 25, 25); // drawn as a circle for simplicity
    }

    update() {
        this.draw();
        // this.y += 0.1;

        const waypoint = waypoints2[this.waypointIndex];

        if (this.x < waypoint.x ) {
            this.x = this.x + this.speed;
            }
        if (this.y < waypoint.y ) {
            this.y = this.y + this.speed;
            }
            
        if (this.y === waypoint.y || this.x === waypoint.x) {
            //I figured that it should be || instead of &&
            this.waypointIndex++;
            console.log(this.waypointIndex);
        }
        console.log(this.x);
    }
    
}



const zombie = new Zombie2 (23 * 30, 2 * 24); 
// position: { x: waypoints[0].x, y: waypoints[0].y}

function draw() {
    clear();
    zombie.update();
}