export default class Zombie {

    constructor(spawnpoint, speed = 2) {
        this.x = spawnpoint.x;
        this.y = spawnpoint.y;
        this.speed = speed;
        // this.currentWaypointIndex = 0;
        // this.spawnPoint = spawnPoint;
    }

    moveTowards() {
        
    }

    // moveTowards(target) {
    //     const dx = target.x - this.x;
    //     const dy = target.y - this.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance > this.speed) {
    //         this.x += (dx / distance) * this.speed;
    //         this.y += (dy / distance) * this.speed;
    //     } else {
    //         this.x = target.x;
    //         this.y = target.y;
    //         this.currentWaypointIndex++;
    //     }
    // }

    // update() {
    //     if (this.currentWaypointIndex < this.spawnPoint.path.length) {
    //         this.moveTowards(this.path[this.currentWaypointIndex]);
    //     }
    // }

    draw() {
        fill(150, 50, 50);
        ellipse(this.x, this.y, 20, 20); // Draw as a circle for simplicity
    }

    // constructor (x, y, gridWidth, gridLength) {
    //     this.x = x;
    //     this.y = y;
    //     this.zombieSpeed = 2;
    //     thiscurrentWaypointIndex = 0;
    //     this.gridWidth = gridWidth;
    //     this.gridLenth = gridLength;
    // }

    // moveTowards(target) {
    //     const dx = target.x - this.x;
    //     const dy = target.y - this.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance > this.speed) {
    //         this.x += (dx / distance) * this.speed;
    //         this.y += (dy / distance) * this.speed;
    //       } else {
    //         // Snap to the waypoint if close enough
    //         this.x = target.x;
    //         this.y = target.y;
    //         this.currentWaypointIndex++; // Move to the next waypoint
    //     }
    // }
    
    // update() {
    //     if (this.currentWaypointIndex < path.length) {
    //       this.moveTowards(path[this.currentWaypointIndex]);
    //     }
    //   }

    // draw() {
    //     fill (50, 150, 100);
    //     rect(this.x, this.y, 30, 30);
    // }
}

let zombie = new Zombie(100, 100);



// function draw() {
//     clear();
//     zombie.draw();
//         zombie.x++;
//         zombie.y++;

// }

