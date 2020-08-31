var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //.....methods
        console.log("x:" + this.x + "Y" + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //.........
    };
    return Point;
}());
// let point:Point;//
// //TypeError: Cannot read property 'draw' of undefined
// point.draw();
var point = new Point(); //let point=new Point();
//object is instance of the class
point.x = 1;
point.y = 2;
point.draw();
