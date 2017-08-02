class employee{
    fullname:string;
    constructor(public firstname:string,public midname:string,public lastname:string){

        this.fullname= firstname+" "+midname+" "+lastname;
    }
}
interface employee{
    firstname:string;
    lastname:string;
    midname:string;
}
function greet(emp:employee):string{
    return "hello... "+emp.firstname+" "+emp.midname+" "+emp.lastname;
}
var e:employee=new employee("deepa","dnyaneshwar","mhaske");

document.body.innerHTML=greet(e);