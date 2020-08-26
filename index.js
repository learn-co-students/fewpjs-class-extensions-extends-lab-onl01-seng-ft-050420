class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
      return  this.sides.length
    }
    get perimeter() {
      return  this.sides.reduce((total, currentValue) => total + currentValue, 0)
    }
}

class Triangle extends Polygon {
get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
   if(side1 + side2 < side3){
       return false
   }
   else if (side1 + side3 < side2){
       return false
   }
   else if (side2 + side3 < side1){
       return false
   }
   else {
       return true
   }
 }   
}

class Square extends Polygon {
    
get area(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return side1 *  side2
}
get isValid() {
let side1 = this.sides[0]
let side2 = this.sides[1]
let side3 = this.sides[2]
let side4 = this.sides[3]
if(side1 === side2 && side3 === side4) {
    return true
}
else {
    return false
}
}
}

