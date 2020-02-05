/*Chris Schultz
schultz_a08b.js
Info 2124 WW
Thoendel
02-04-2020*/

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
const MathUtility = {   //declare MathUtility object literal

    //1st method- area of circle
    getAreaOfCircle : function(radius) {
        return Math.pow(radius,2) * Math.PI;   //return pi*r2
    }, //end getAreaOfCircle method

    //2nd method- get area of square
    getAreaOfSquare : function(sideLength) {
        return Math.pow(sideLength,2);  //returns square of the side
    }, //end getAreaOfSquare method
    
    //3rd method- get area of triangle
    getAreaOfTriangle : function(h,b) {
        return (h*b)/2;  //returns (h*b) / 2 = area of triangle
    } //end getAreaOfTriangle
};//end MathUtility object literal


/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);

//end program