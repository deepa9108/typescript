"use strict";
class Animal {
    eat() { console.log("eating..."); }
}
class Dog extends Animal {
    bark() { console.log("barking..."); }
}
class BabyDog extends Dog {
    weep() { console.log("weeping..."); }
}
let d = new BabyDog();
d.weep();
d.bark();
d.eat();
//# sourceMappingURL=multilevel.js.map