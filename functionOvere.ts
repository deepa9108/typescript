interface perDemo{
    show():void;
}

class Person implements perDemo{
     private name: string;
     constructor(studName: string){
       this.name = studName;
     }
    show():void{
        console.log("Name "+this.name);
    }

}
class Employee extends Person {
     department: string;
     salary:number;
    constructor(name: string, department: string,sal:number) {
        super(name);
        this.department = department;
        this.salary=sal;
        console.log('Hello, my name is '+name+ ' and I work in ' +this.department);  
    } 
}
  
 
let howard = new Employee("deepali","computer",20000);
howard.show();
let per:perDemo = new Person("Dnyanesh");
per.show();