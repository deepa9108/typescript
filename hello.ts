class Hello{
    a:Number;
    b:Number;
    constructor(x:Number,y:Number)
    {
        this.a=x;
        this.b=y;
    }
    show():Number{
      return(Number(this.a)+Number(this.b));  
    }
}
let s:Hello=new Hello(10,20);
let sum:Number = s.show();
console.log(sum);

