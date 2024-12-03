export default class SpawnpointTopLeft {
    constructor (x, y, gridWidth, gridLength) {
        this.x = x;
        this.y = y;
        const spawnpointTopLeft = (x + 2, y + 2);
        this.gridWidth = gridWidth;
        this.gridLenth = gridLength;
    }
}