class Rectangle
{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    
    calculateArea(){
        var area = new Rectangle(0,0);
        area = this.length * this.breadth;
        return area;
    }
    calculatePerimeter(){
        var perimeter = new Rectangle(0,0);
        perimeter = (this.length + this.breadth)*2;
        return perimeter;
    }
}
// module.exports.calculateArea = calculateArea;
// module.exports.calculatePerimeter = calculatePerimeter;
module.exports.Rectangle = Rectangle;