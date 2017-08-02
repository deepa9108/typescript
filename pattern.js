"use strict";
class pattern {
    constructor(n) {
    }
    display(n) {
        for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= i; j++) {
                console.log(i);
            }
            div.innerHTML = "*";
            //console.log("\n");
        }
    }
}
var button = document.createElement('button');
var div = document.createElement('div');
button.innerText = "Draw";
div.id = "d1";
button.onclick = function () {
    var p = parseFloat(document.getElementById("t1").value);
    var p1 = new pattern(p);
    p1.display(p);
};
document.body.appendChild(button);
document.body.appendChild(div);
//# sourceMappingURL=pattern.js.map