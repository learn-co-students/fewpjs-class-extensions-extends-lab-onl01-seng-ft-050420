// Your code here
class Polygon {
    constructor(arrSides){
        this.sides = arrSides

    };

    get countSides() {
        return this.sides.length
    }; 

    get perimeter(){
        return this.sides.reduce((acc, currentValue) => acc+currentValue,0)
    }

} 

class Triangle extends Polygon {

    get isValid(){
        if (this.sides[0]+this.sides[1]>this.sides[2] &&
            this.sides[1]+this.sides[2]>this.sides[0] && 
            this.sides[0]+this.sides[2]> this.sides[1]) {
                return true
        }
        return false
    }
};

class Square extends Polygon {

    get isValid(){
        if(this.sides.length === 4 && this.sides.every(n => n===this.sides[0]) ){
            return true
        }
        return false
    };

    get area(){
        return this.sides[0]*this.sides[0]
    }

}