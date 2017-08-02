var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shape = (function () {
    function shape() {
    }
    return shape;
}());
var circle = (function (_super) {
    __extends(circle, _super);
    function circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circle.prototype.display = function (r) {
        p2.area = 3.1428 * r * r;
        console.log("area of circle:" + p2.area);
    };
    return circle;
}(shape));
var rect = (function (_super) {
    __extends(rect, _super);
    function rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rect.prototype.display = function (l) {
        var w = 10;
        p3.area = l * w;
        console.log("area of rectangle:" + p3.area);
    };
    return rect;
}(shape));
var p2 = new circle();
var r = 6;
p2.display(r);
var p3 = new rect();
var l = 7;
p3.display(l);
