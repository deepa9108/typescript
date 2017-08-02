var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(studName) {
        this.name = studName;
    }
    Person.prototype.show = function () {
        console.log("Name " + this.name);
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department, sal) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        _this.salary = sal;
        console.log('Hello, my name is ' + name + ' and I work in ' + _this.department);
        return _this;
    }
    return Employee;
}(Person));
//per.show();
var howard = new Employee("deepali", "computer", 20000);
howard.show();
var per = new Person("Dnyanesh");
per.show();
