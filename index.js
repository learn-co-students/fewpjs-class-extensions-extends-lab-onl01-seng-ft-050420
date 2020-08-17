class Polygon {
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(((x, y) => x + y), 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        const sideA = this.sides[0];
        const sideB = this.sides[1];
        const sideC = this.sides[2];

        if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB){
            return false
        } else {
            return true
        }
    }
}

    class Square extends Polygon {
        get isValid(){
            if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]){
                return true
            } else {
                return false
            }
        }

        get area(){
            return this.sides[0] ** 2
        }
    }
