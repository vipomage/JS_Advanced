class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static distance(point1, point2) {
        let dx = point1._x - point2._x;
        let dy = point1._y - point2._y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    }

}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
