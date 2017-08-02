class Demo{
    static rate:Number=12;
    bal:Number;
    holder:string;
    constructor(bal:Number,holder:string)
    {
        this.bal=bal;
        this.holder=holder;
    }
    display():void{
        console.log("Account Holder:"+this.holder+"\n Rate of Interest:"+Demo.rate+"\n balance:"+this.bal);
    }
}
let a1:Demo=new Demo(100,"navnath");
let a2:Demo=new Demo(200,"deepali");
a1.display();
a2.display();
Demo.rate=15;
a1.display();
a2.display();
