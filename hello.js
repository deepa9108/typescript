"use strict";
class Hello {
    constructor(x, y) {
        this.a = x;
        this.b = y;
    }
    show() {
        return (Number(this.a) + Number(this.b));
    }
}
let s = new Hello(10, 20);
let sum = s.show();
console.log(sum);
//# sourceMappingURL=hello.js.map