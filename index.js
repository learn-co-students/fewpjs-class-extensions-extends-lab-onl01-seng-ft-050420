// Your code here

class Polygon {
    constructor(arrayOfSides) {
        this.arrayOfSides = arrayOfSides
    }
    get countSides() {
        return this.arrayOfSides.length
    }
    get perimeter() {
        return this.arrayOfSides.reduce((total, current) => total + current, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return ((this.arrayOfSides[0] + this.arrayOfSides[1] > this.arrayOfSides[2]) && (this.arrayOfSides[0] + this.arrayOfSides[2] > this.arrayOfSides[1]) && (this.arrayOfSides[1] + this.arrayOfSides[2] > this.arrayOfSides[0])) ? true : false
    }
}

class Square extends Polygon {
    get isValid() {
        return this.arrayOfSides.every(value => value === this.arrayOfSides[0])
    }
    get area() {
        return this.arrayOfSides[0] * this.arrayOfSides[1]
    }
}