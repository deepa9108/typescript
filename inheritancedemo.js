"use strict";
class demo {
    constructor(s1, s2) {
        this.sb1 = s1;
        this.sb2 = s2;
    }
}
class marks extends demo {
    constructor(s1, s2, r, s) {
        super(s1, s2);
        this.roll = r;
        this.stud = s;
        console.log(" Roll No:" + this.roll + "\n Name:" + this.stud + "\n math:" + s1 + "\n English:" + s2);
    }
}
let m = new marks(40, 50, 1, 'deepali');
//# sourceMappingURL=inheritancedemo.js.map