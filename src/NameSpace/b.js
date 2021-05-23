/// <reference path='a.ts'/>
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(1));
console.log(Shape.square(1));
var circle = Shape.cricle;
console.log(circle(2));
