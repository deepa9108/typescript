interface Iperson{
    fname:string;
    lname:string;
    show():void;
}

class person implements Iperson {
   fname:string;
    lname:string;
    address:string;
constructor(f:string,l:string,ad:string){
    this.fname=f;
    this.lname=l;
    this.address=ad;
}
show():void{
    console.log("welcome "+p.fname);
    this.display();
}
display():void{
    console.log("first name:"+p.fname+"\n last name:"+p.lname+"\n Address:"+this.address);
}
}
let p:Iperson=new person("deepa","shirole","pune");
p.show();

