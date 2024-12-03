export default class PathTopLeft {
    constructor(x, y, gridWidth, gridHeight) {
        this.waypoints = [
            { x: x + 7 * gridWidth, y: y + 2 * gridHeight },
            { x: x + 7 * gridWidth, y: y + 5 * gridHeight },
            { x: x + 12 * gridWidth, y: y + 5 * gridHeight },
            { x: x + 12 * gridWidth, y: y + 8 * gridHeight },
            { x: x + 10 * gridWidth, y: y + 8 * gridHeight },
            { x: x + 10 * gridWidth, y: y + 11 * gridHeight },
            { x: x + 8 * gridWidth, y: y + 11 * gridHeight },
            { x: x + 8 * gridWidth, y: y + 14 * gridHeight },
            { x: x + 11 * gridWidth, y: y + 14 * gridHeight }
        ];
    }

    getWaypoints() {
        return this.waypoints;
    }
    // constructor (x, y, gridWidth, gridHeight) {
    //     // this.x = x;
    //     // this.y = y;
    //     const waypoint = (x + 7, y + 2);
    //     const waypoint2 = (x + 7, y + 5);
    //     const waypoint3 = (x + 12, y + 5);
    //     const waypoint4 = (x + 12, y + 8);
    //     const waypoint5 = (x + 10, y + 8);
    //     const waypoint6 = (x + 10, y + 11);
    //     const waypoint7 = (x + 8, y + 11);
    //     const waypoint8 = (x + 8, y + 14);
    //     const waypoint9 = (x + 11, y + 14);
    //     this.gridWidth = gridWidth;
    //     this.gridHeight = gridHeight;
    // }
}