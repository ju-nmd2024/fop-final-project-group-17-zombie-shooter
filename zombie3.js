let gridWidth = 30;
let gridHeight = 24;

//bottom left path
const waypoints3 = [
    { x: 2 * gridWidth, y: 15 * gridHeight},
    { x: 4 * gridWidth, y: 15 * gridHeight},
    { x: 4 * gridWidth, y: 23 * gridHeight},
    { x: 6 * gridWidth, y: 23 * gridHeight},
    { x: 6 * gridWidth, y: 28 * gridHeight},
    { x: 9 * gridWidth, y: 28 * gridHeight},
    { x: 9* gridWidth, y: 22 * gridHeight},
    { x: 13 * gridWidth, y: 22 * gridHeight},
    { x: 13 * gridWidth, y: 19 * gridHeight},
];

export default class ZombieThree {
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
        // this.y += 0.1;

        const waypoint = waypoints3[this.waypointIndex];

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
            
        if (this.y === waypoint.y && this.x === waypoint.x && this.waypointIndex <= waypoints3.length - 1) {
            this.waypointIndex++;
            console.log(this.waypointIndex);
        }
    
    }

}



const zombie = new ZombieThree (2 * 30, 23 * 24); 
// position: { x: waypoints[0].x, y: waypoints[0].y}

function draw() {
    clear();
    zombie.update();
}