export default class Spawnpoint {
    constructor (x, y, gridWidth, gridHeight) {
        this.x = x;
        this.y = y;
        const spawnpointBottomRight = (x + 23, y + 23);
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
    }
}