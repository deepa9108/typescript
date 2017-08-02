enum Grade{
    b,bp,a,ap
}

class student{
    name:string;
    grade: Grade;
}
let s1:student=new student();
s1.name="abc";
s1.grade=Grade.a;

let s2:student = new student();
s2.name="pqr";
s2.grade= Grade.b;

console.log(s1.grade>s2.grade);