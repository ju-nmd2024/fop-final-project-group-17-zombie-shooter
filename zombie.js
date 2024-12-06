let gridWidth = 30;
let gridHeight = 24;


const waypoints = [
    { x: 7 * gridWidth, y: 2 * gridHeight},
    { x: 7 * gridWidth, y: 6 * gridHeight},
    { x: 12 * gridWidth, y: 6 * gridHeight},
    { x: 12 * gridWidth, y: 9 * gridHeight},
    { x: 10 * gridWidth, y: 9 * gridHeight},
    { x: 10 * gridWidth, y: 13 * gridHeight},
    { x: 7* gridWidth, y: 13 * gridHeight},
    { x: 7 * gridWidth, y: 17 * gridHeight},
    { x: 11 * gridWidth, y: 17 * gridHeight},
  ]; 

export default class ZombieTwo {
    constructor(x, y) {
        this.waypointIndex = 0;
        this.speed = 1;
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(20, 75, 50);
        ellipse(this.x, this.y, 25, 25); // drawn as a circle for simplicity
    }

    update() {
        this.draw();
        // this.y += 0.1;

        const waypoint = waypoints[this.waypointIndex];

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
            
        if (this.y === waypoint.y && this.x === waypoint.x && this.waypointIndex < waypoints.length - 1) {
            this.waypointIndex++;
            console.log(this.waypointIndex);
        }
    
    }

}

//we need to add zombie collisison, zombie spawn rate