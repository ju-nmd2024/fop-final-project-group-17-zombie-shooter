import PathTopLeft from "./waypoints";

export default class Zombie {
    constructor (x, y, gridWidth, gridLength) {
        this.x = x;
        this.y = y;
        this.zombieSpeed = 2;
        thiscurrentWaypointIndex = 0;
        this.gridWidth = gridWidth;
        this.gridLenth = gridLength;
    }

    moveTowards(target) {
        const dx = target.x - this.x;
        const dy = target.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > this.speed) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
          } else {
            // Snap to the waypoint if close enough
            this.x = target.x;
            this.y = target.y;
            this.currentWaypointIndex++; // Move to the next waypoint
        }
    }
    
    update() {
        if (this.currentWaypointIndex < path.length) {
          this.moveTowards(path[this.currentWaypointIndex]);
        }
      }

    draw() {
        fill (50, 150, 100);
        rect(this.x, this.y, 30, 30);
    }
}

let zombie = new Zombie(100, 100);



// function draw() {
//     clear();
//     zombie.draw();
//         zombie.x++;
//         zombie.y++;

// }

