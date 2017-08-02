"use strict";
class Demo {
    constructor(bal, holder) {
        this.bal = bal;
        this.holder = holder;
    }
    display() {
        console.log("Account Holder:" + this.holder + "\n Rate of Interest:" + Demo.rate + "\n balance:" + this.bal);
    }
}
Demo.rate = 12;
let a1 = new Demo(100, "navnath");
let a2 = new Demo(200, "deepali");
a1.display();
a2.display();
Demo.rate = 15;
a1.display();
a2.display();
//# sourceMappingURL=helloworld.js.map