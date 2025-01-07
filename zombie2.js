let gridWidth = 30;
let gridHeight = 24;

//top right path
const waypoints2 = [
    { x: 23 * gridWidth, y: 11 * gridHeight},
    { x: 18 * gridWidth, y: 11 * gridHeight},
    { x: 18 * gridWidth, y: 2 * gridHeight},
    { x: 13 * gridWidth, y: 2 * gridHeight},
    { x: 13 * gridWidth, y: 13 * gridHeight},
    { x: 12 * gridWidth, y: 13 * gridHeight},
    { x: 12* gridWidth, y: 15 * gridHeight},
];

export default class ZombieTwo {
    constructor(x, y) {
        this.waypointIndex = 0;
        this.speed = 2;
        this.x = x;
        this.y = y;
        // this.waypoints = waypoints;
    }

    draw() {
        fill(20, 75, 50);
        ellipse(this.x, this.y, 25, 25); // drawn as a circle for simplicity
    }

    update() {
        this.draw();

        const waypoint = waypoints2[this.waypointIndex];

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
            
        if (this.y === waypoint.y && this.x === waypoint.x && this.waypointIndex <= waypoints2.length - 1) {
            this.waypointIndex++;
            console.log(this.waypointIndex);
        }
    
    }

}

//we need to add zombie collisison, zombie spawn rate