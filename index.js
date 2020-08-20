class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray;
    }

    get countSides() {
        return this.sidesArray.length;
    }

    get perimeter() {
        return this.sidesArray.reduce((acc, curr) => acc + curr);
    }
}

class Triangle extends Polygon {

    get isValid() {
        const sides = this.sidesArray;
        const first = sides[0] + sides[1];
        const second = sides[1] + sides[2];
        const third = sides[2] + sides[0];
        if (first < sides[2] || second < sides[0] || third < sides[1]) {
            return false;
        }
        return true;
    }
}

class Square extends Polygon {
    get isValid() {
        const sides = this.sidesArray;
        if (sides[0] === sides[2] && sides[2] === sides[1] && sides[1] === sides[3]) {
            return true;
        }
        return false;
    }

    get area() {
        return this.sidesArray[0]**2;
    }
}