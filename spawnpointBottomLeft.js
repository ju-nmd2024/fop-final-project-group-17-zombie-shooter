export default class Spawnpoint {
    constructor (x, y, gridWidth, gridHeight) {
        this.x = x;
        this.y = y;
        const spawnpointBottomLeft = (x + 2, y + 23);
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
    }
}