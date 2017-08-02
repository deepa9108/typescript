class cube{
    
    static a:Number=3;
     static calculate():void{
         var z=this.a;
         var mult=Number(z)*Number(z)*Number(z);
         console.log(mult);
        
    }
        test():void{
            console.log("method invoked..");
        }
}

let c1:cube=new cube();
cube.calculate();
c1.test();