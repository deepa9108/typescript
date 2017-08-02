"use strict";
class cube {
    static calculate() {
        var z = this.a;
        var mult = Number(z) * Number(z) * Number(z);
        console.log(mult);
    }
    test() {
        console.log("method invoked..");
    }
}
cube.a = 3;
let c1 = new cube();
cube.calculate();
c1.test();
//# sourceMappingURL=cube.js.map