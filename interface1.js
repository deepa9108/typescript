var person = (function () {
    function person(f, l, ad) {
        this.fname = f;
        this.lname = l;
        this.address = ad;
    }
    person.prototype.show = function () {
        console.log("welcome " + p.fname);
        this.display();
    };
    person.prototype.display = function () {
        console.log("first name:" + p.fname + "\n last name:" + p.lname + "\n Address:" + this.address);
    };
    return person;
}());
var p = new person("deepa", "shirole", "pune");
p.show();
