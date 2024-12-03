export default class PathTopLeft {
    constructor (x, y, gridWidth, gridLength) {
        // this.x = x;
        // this.y = y;
        const waypoint = (x + 7, y + 2);
        const waypoint2 = (x + 7, y + 5);
        const waypoint3 = (x + 12, y + 5);
        const waypoint4 = (x + 12, y + 8);
        const waypoint5 = (x + 10, y + 8);
        const waypoint6 = (x + 10, y + 11);
        const waypoint7 = (x + 8, y + 11);
        const waypoint8 = (x + 8, y + 14);
        const waypoint9 = (x + 11, y + 14);
        this.gridWidth = gridWidth;
        this.gridLenth = gridLength;
    }
}

export default class PathTopRight {
    constructor (x, y, gridWidth, gridLength) {
        const waypoint = (x + 23, y + 10);
        const waypoint2 = (x + 18, y + 10);
        const waypoint3 = (x + 18, y + 2);
        const waypoint4 = (x + 14, y + 2);
        const waypoint5 = (x + 14, y + 11);
        const waypoint6 = (x + 13, y + 11);
        const waypoint7 = (x + 13, y + 12);
        this.gridWidth = gridWidth;
        this.gridLenth = gridLength;
    }
}

export default class PathBottomLeft {
    constructor (x, y, gridWidth, gridLength) {
        const waypoint = (x + 2, y + 13);
        const waypoint2 = (x + 4, y + 13);
        const waypoint3 = (x + 4, y + 19);
        const waypoint4 = (x + 6, y + 19);
        const waypoint5 = (x + 6, y + 23);
        const waypoint6 = (x + 10, y + 23);
        const waypoint7 = (x + 10, y + 18);
        const waypoint8 = (x + 13, y + 15);
        this.gridWidth = gridWidth;
        this.gridLenth = gridLength;
    }
}

export default class PathBottomRight {
    constructor (x, y, gridWidth, gridLength) {
        const waypoint = (x + 23, y + 19);
        const waypoint2 = (x + 20, y + 19);
        const waypoint3 = (x + 20, y + 16);
        const waypoint4 = (x + 23, y + 16);
        const waypoint5 = (x + 23, y + 14);
        const waypoint6 = (x + 18, y + 14);
        const waypoint7 = (x + 18, y + 18);
        const waypoint8 = (x + 15, y + 18);
        const waypoint9 = (x + 15, y + 14);
        const waypoint10 = (x + 14, y + 14);
        this.gridWidth = gridWidth;
        this.gridLenth = gridLength;
    }
}
