let gridWidth = 30;
let gridHeight = 24;


//bottom right path
const waypoints4 = [
    { x: 23 * gridWidth, y: 23 * gridHeight},
    { x: 20 * gridWidth, y: 23 * gridHeight},
    { x: 20 * gridWidth, y: 20 * gridHeight},
    { x: 23 * gridWidth, y: 20 * gridHeight},
    { x: 23 * gridWidth, y: 17 * gridHeight},
    { x: 17 * gridWidth, y: 17 * gridHeight},
    { x: 17 * gridWidth, y: 22 * gridHeight},
    { x: 15 * gridWidth, y: 22 * gridHeight},
    { x: 15 * gridWidth, y: 17 * gridHeight},
    { x: 14 * gridWidth, y: 17 * gridHeight},
];

export default class ZombieFour {
    constructor(x, y) {
        this.waypointIndex = 0;
        this.speed = 1;
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

        const waypoint = waypoints4[this.waypointIndex];

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
            
            // if (this.waypointIndex >= waypoints.length) {
            //     console.log("Zombie has reached the end of the path.");
            //     // Optionally, remove the zombie from the game or stop its movement
            //     return;
            // }
            
        if (this.y === waypoint.y && this.x === waypoint.x && this.waypointIndex <= waypoints4.length - 1) {
            this.waypointIndex++;
            console.log(this.waypointIndex);
        }
    
    }

}



// const zombie = new ZombieFour (23 * 30, 23 * 24); 
// // position: { x: waypoints[0].x, y: waypoints[0].y}

// function draw() {
//     clear();
//     zombie.update();
// }