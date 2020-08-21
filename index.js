class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce(function(a, v){ return a + v })
    }

}

class Triangle extends Polygon {
    get isValid(){
        if (this.countSides === 3 && this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[2] + this.array[0] > this.array[1]) { 
            return true 
        } 
        else { 
            return false
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3] && this.array[3] === this.array[0]) { 
            return true
         } else { 
             return false
         }   
    }

    get area(){
        return (this.perimeter / this.countSides) * (this.perimeter / this.countSides)
    }
}