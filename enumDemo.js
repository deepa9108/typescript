var Grade;
(function (Grade) {
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["BP"] = 3] = "BP";
    Grade[Grade["A"] = 2] = "A";
    Grade[Grade["AP"] = 1] = "AP";
})(Grade || (Grade = {}));
var enumDemo = (function () {
    function enumDemo(name, grade) {
        this.studName = name;
        this.grade = grade;
    }
    enumDemo.prototype.check = function () {
        if (this.grade == 4) {
            var gr = "B";
            console.log("Name:" + this.studName + "\n got:" + gr);
        }
        else if (this.grade == 3) {
            var gr = "B+";
            console.log("Name:" + this.studName + "\n got:" + gr);
        }
        else if (this.grade == 2) {
            var gr = "A";
            console.log("Name:" + this.studName + "\n got:" + gr);
        }
        else {
            var gr = "A+";
            console.log("Name:" + this.studName + "\n got:" + gr);
        }
    };
    return enumDemo;
}());
for (var i = 1; i <= 4; i++) {
    var sDemo = new enumDemo("deepa", i);
    sDemo.check();
}
