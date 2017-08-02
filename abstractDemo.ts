abstract class shape{
    area:number; 
    public abstract display(r:any):void

    }
class circle extends shape{
    
    public display(r:number):void{
        p2.area=3.1428*r*r;
        console.log("area of circle:"+p2.area);
    }

}
class rect extends shape{
    public display(l:number):void{
        let w:number=10;
        p3.area=l*w;
        console.log("area of rectangle:"+p3.area)
    }
}

let p2:shape=new circle();
let r:number=6;
p2.display(r);
let p3:shape=new rect();
let l:number=7; 
p3.display(l);


