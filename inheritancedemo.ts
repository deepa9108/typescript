 class demo{
    private sb1:Number;
    private sb2:Number;
    constructor(s1:Number,s2:Number){
        this.sb1=s1;
        this.sb2=s2;

    }
}
class marks extends demo{
    roll:Number;
    stud:string;
    constructor(s1:Number,s2:Number,r:Number,s:string){
        super(s1,s2);
        this.roll=r;
        this.stud=s;
        console.log(" Roll No:"+this.roll+"\n Name:"+this.stud+"\n math:"+s1+"\n English:"+s2);
        
    }
    }
let m:marks=new marks(40,50,1,'deepali');
