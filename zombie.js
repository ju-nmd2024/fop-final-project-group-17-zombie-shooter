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
        this.y += -0.1;
    }


    // /*
    // taken from: https://www.youtube.com/watch?v=C4_iRLlPNFc
    // */    
    // constructor({position = { x: 0, y: 0 } }) {
    //     this.position = position;
    //     this.pathIndex = 0;
    // }
    
    // update() {
    //     this.draw();

    //     /*
    // taken from: https://www.youtube.com/watch?v=C4_iRLlPNFc
    // movement towards waypoint (path points) in array
    // > pathfinding for zombies
    // */
        // const path = paths[this.pathIndex];

        // //movement calculations
        // const yDistance = path.y - this.position.y;
        // const xDistance = path.x - this.position.x;
        // const angle = Math.atan2(yDistance, xDistance);
        // this.position.x += Math.cos(angle);
        // this.position.y += Math.sin(angle);

        // //"waypoint(path coordinates)" index change++, so zombie moves to next waypoint
        // if(
        //     Math.round(this.position.x) === Math.round(path.x) &&
        //     Math.round(this.position.y) === Math.round(path.y) &&
        //     this.pathIndex < path.length - 1 
        // ) {
        //     this.pathIndex++;
        // }



}



//we need to add zombie collisison, zombie spawn rate