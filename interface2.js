"use strict";
class employee {
    constructor(firstname, midname, lastname) {
        this.firstname = firstname;
        this.midname = midname;
        this.lastname = lastname;
        this.fullname = firstname + " " + midname + " " + lastname;
    }
}
function greet(emp) {
    return "hello... " + emp.firstname + " " + emp.midname + " " + emp.lastname;
}
var e = new employee("deepa", "dnyaneshwar", "mhaske");
document.body.innerHTML = greet(e);
//# sourceMappingURL=interface2.js.map