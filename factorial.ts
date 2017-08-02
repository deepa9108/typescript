class factorial {
    constructor (public i: number, public n: number) {}
    fact(num: number): number
    {
         if (num > 0) {
            this.i = this.i * num;
            this.fact(num - 1);
        }
    return this.i;  
    }
} 
var button = document.createElement('button')
var div=document.createElement('div')
button.innerText = "Calculate"
div.id="d1";
button.onclick = function() {
    var v1=parseFloat((<HTMLInputElement>document.getElementById("t1")).value);
    let v2:factorial = new factorial(1,v1);
    
       alert(v2.fact(v1).toString());
       div.innerHTML="Welcome...";
} 
document.body.appendChild(button);
document.body.appendChild(div);

