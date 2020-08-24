// Your code here
class Polygon {

    constructor(sides) {
        this.sides = sides;
    };

    get countSides() {
        return this.sides.length;
    };

    get perimeter() {
        return this.sides.reduce( (acc, i) => {
            acc += i;
            return acc;
        }, 0);
    };

};

class Triangle extends Polygon {
    get isValid() {
        let args = [
            this.sides[0] + this.sides[1] > this.sides[2],
            this.sides[1] + this.sides[2] > this.sides[0],
            this.sides[0] + this.sides[2] > this.sides[1]
        ];

        if (this.sides.length !== 3) {
            return false;
        } else {
            if (args.includes(false)) {
                return false;
          } else {
                return true;
          };
        };
    };
};

class Square extends Polygon {

    get isValid() {
        let args = [
            this.sides[0] === this.sides[1],
            this.sides[0] === this.sides[2],
            this.sides[0] === this.sides[3]
        ];

        if (this.sides.length !== 4) {
            return false;
        } else {
            if (args.includes(false)) {
                return false;
            } else {
                return true;
            };
        };
    };

    get area() {
        return this.sides[0] ** 2
    };

};
