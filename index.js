// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides 
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
       return this.sides.reduce( (a, b) => a + b )
    }
}

class Triangle extends Polygon {
    

    get isValid() {
        const first = this.sides[0]
        const second = this.sides[1]
        const third = this.sides[2]
        return ((first + second) > third) && (( second + third) > first) && ((first + third) > second) 

    }
}

class Square extends Polygon {

  

    get isValid() {
        const total = this.sides.reduce( (a, b) => a + b )
        return (total / this.sides[0]) === 4
    }

    get area() {
        // if ( this.isValid() ) {
            return this.sides[0] ** 2
        // }
    }
}
// function go() {
// [5,5,5,5].reduce( (a, b) => {
//     debugger
//    return a b
// } )
// }