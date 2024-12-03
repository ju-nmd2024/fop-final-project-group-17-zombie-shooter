export default class SpawnpointTopLeft {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getSpawnPoint() {
        return { x: this.x, y: this.y };
    }
    // constructor (x, y, gridWidth, gridHeight) {
    //     this.x = x;
    //     this.y = y;
    //     const spawnpointTopLeft = (x + 2, y + 2);
    //     this.gridWidth = gridWidth;
    //     this.gridHeight = gridHeight;
    // }
}