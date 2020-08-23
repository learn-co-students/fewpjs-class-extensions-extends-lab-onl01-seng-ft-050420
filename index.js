class Polygon{
    constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers
    }

    get countSides(){
        return this.arrayOfIntegers.length
    }

    get perimeter(){
        
        // for(const side of this.arrayOfIntegers){
        // return side * this.arrayOfIntegers.length [1,10,2]
        // }
     return this.arrayOfIntegers.reduce(function(a, v){return a + v})
    }}

    class Triangle extends Polygon{
        
        get isValid(){
           if (this.arrayOfIntegers[0] + this.arrayOfIntegers[1] <= this.arrayOfIntegers[2] || this.arrayOfIntegers[0] + this.arrayOfIntegers[2] <= this.arrayOfIntegers[1] || this.arrayOfIntegers[1] + this.arrayOfIntegers[2] <= this.arrayOfIntegers[0]
            
            ){
           return false
            }else {
            return true
        }
        } }

        class Square extends Polygon{
            
            get area(){
                return this.arrayOfIntegers[0] * this.arrayOfIntegers[0]
            }

            get isValid(){
                console.log(this.arrayOfIntegers[0])
                    console.log(this.arrayOfIntegers[1])
                    console.log(this.arrayOfIntegers[2])
                    console.log(this.arrayOfIntegers[3])
                if (this.arrayOfIntegers[0] == this.arrayOfIntegers[2] && this.arrayOfIntegers[2] == this.arrayOfIntegers[1] && this.arrayOfIntegers[1] == this.arrayOfIntegers[3] ){
                    

                    return true
                }else{
                    return false
                }
            }
        }
    

