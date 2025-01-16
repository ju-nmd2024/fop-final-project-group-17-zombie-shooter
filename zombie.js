export default class Zombie {
    constructor(x, y, waypointIndex, speed, waypoints, endpoints) {
        this.waypointIndex = waypointIndex;
        this.speed = speed;
        this.base = {
            x: x,
            y: y
        }
        this.x = x;
        this.y = y;
        this.waypoints = waypoints;
        this.endpoints = endpoints;
    }

    reset() {
        this.x = this.base.x;
        this.y = this.base.y;
    }

    draw() {
        fill(20, 75, 50);
        ellipse(this.x, this.y, 25, 25); // drawn as a circle for simplicity
    }

    update() {
        this.draw();
        // this.y += 0.1;

        const waypoint = this.waypoints[this.waypointIndex];

        if (this.x < waypoint.x ) {
            this.x = this.x + this.speed;
            } else if (this.x > waypoint.x) {
                this.x = this.x - this.speed;
            }
        if (this.y < waypoint.y ) {
            this.y = this.y + this.speed;
             } else if (this.y > waypoint.y) {
                this.y = this.y - this.speed;
            }
            
        if (this.y === waypoint.y && this.x === waypoint.x && this.waypointIndex < this.waypoints.length - 1) {
            this.waypointIndex++;
            console.log(`Reached waypoint ${this.waypointIndex}`);
        }
        console.log("x =" + this.x);
        console.log(this.y);

    }

}

//we need to add zombie collisison, zombie spawn rate