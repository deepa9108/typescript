class Animal{  
 eat():void{console.log("eating...");}  
}  
class Dog extends Animal{  
bark():void{console.log("barking...");}  
}  
class BabyDog extends Dog{  
weep():void{console.log("weeping...");}  
}  
  
let d:BabyDog=new BabyDog();  
d.weep();  
d.bark();  
d.eat();  
  