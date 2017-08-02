"use strict";
class sum1 {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
    greet() {
        return (this.i + this.j);
    }
}
var button = document.createElement('button');
var div = document.createElement('div');
button.innerText = "SUM";
div.id = "d1";
button.onclick = function () {
    var v = parseFloat(document.getElementById("Text1").value);
    var v1 = parseFloat(document.getElementById("Text2").value);
    var v2 = new sum1(v, v1);
    div.innerHTML = v2.greet().toString();
    alert(v2.greet().toString());
};
document.body.appendChild(button);
document.body.appendChild(div);
//# sourceMappingURL=getelement.js.map