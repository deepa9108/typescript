"use strict";
var Grade;
(function (Grade) {
    Grade[Grade["b"] = 0] = "b";
    Grade[Grade["bp"] = 1] = "bp";
    Grade[Grade["a"] = 2] = "a";
    Grade[Grade["ap"] = 3] = "ap";
})(Grade || (Grade = {}));
class student {
}
let s1 = new student();
s1.name = "abc";
s1.grade = Grade.a;
let s2 = new student();
s2.name = "pqr";
s2.grade = Grade.b;
console.log(s1.grade > s2.grade);
//# sourceMappingURL=myEnum.js.map