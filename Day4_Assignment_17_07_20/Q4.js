console.log("1. Addtion");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Square root");
console.log("6. Percentage");


let cal= prompt("Enter your choice",0);
let pin=Number(cal);

switch(pin) 
{
    case 1:
    let x = prompt(" Enter 1st number to add",0);
    let y = prompt(" Enter 2nd number to add",0);        
    z = +x + +y; 
    console.log(`Addition of ${x} and ${y} is ${z}`);  
    break;
    
    case 2: 
    let a = prompt(" Enter 1st number for subtraction",0);
    let b = prompt(" Enter 2nd number for subtraction",0);        
    c = +a - +b; 
    console.log(`Substraction of ${a} and ${b} is ${c}`);
    break;

    case 3: 
    let d = prompt(" Enter 1st number to multiply",0);
    let e = prompt(" Enter 2nd number to multiply",0);        
    f = +d * +e; 
    console.log(`multiplication of ${d} and ${e} is ${f}`);
    break;

    case 4: 
    let g = prompt(" Enter 1st number for division",0);
    let h = prompt(" Enter 2nd number for division",0);        
    i = +g / +h;
    console.log(`division of ${g} and ${h} is ${i}`);
    break;
    
    case 5: 
    let j = prompt(" Enter number to find square root",0);         

    console.log(`square root of ${j} is `+Math.sqrt(j));
    break;
    
    case 6: 
    let k = prompt(" Enter specified value",0);
    let l = prompt(" Enter total value",0);        
    m = (k*100)/l; 
    console.log(`percentage of ${k} and ${l} is ${m}`);
    break;

    default:
    console.log("please select form the above options i.e from 1-6");
    break;

}