enum Grade {
    B=4,BP=3,A=2,AP=1
}
class enumDemo{
    studName:string;
    grade:Grade;
    constructor(name:string,grade:Grade){
        this.studName=name;
        this.grade=grade;
        }
    check():void{
        
            if(this.grade==4)
                {
    
                var gr="B";
                    console.log("Name:"+this.studName+"\n got:"+gr);
                
                }
                else if(this.grade==3){
                    var gr="B+";
                    console.log("Name:"+this.studName+"\n got:"+gr);
                }
                else if(this.grade==2){
                    var gr="A";
                    console.log("Name:"+this.studName+"\n got:"+gr);
                }
                else {
                    var gr="A+";
                    console.log("Name:"+this.studName+"\n got:"+gr);
                }
        
    }
}
    for(let i=1;i<=4;i++){
    let sDemo=new enumDemo("deepa",i);
    sDemo.check();
    }
