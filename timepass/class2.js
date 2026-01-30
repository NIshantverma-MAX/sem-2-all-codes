//arithmetic operators

let a = 10;
let b = 3;
console.log( a + b);
console.log( a - b);
console.log( a / b);
console.log( a * b);
console.log( a % b);

//conmparison operators

console.log( "comparison operators");
let y = 10;
let x = "10";
console.log( a == b);
console.log( a === b);
console.log( 3>5);
console.log( 5=="5");
console.log( 5==="5");
console.log( 5 <="5");
console.log( 5 <="5");
console.log( 4 !=4);
console.log( "ans");
console.log(5 +2 +"5");
console.log(true + true + true);//coercion of true 1; false 0
//ua16+

let age = 14;
let withParent = false;
let canEnter = withParent || age > 16;
console.log("can enter ?"+canEnter);


//grading system

let marks = prompt("Enter your marks (0-100):");
marks = Number(marks);//typecasting
if(marks < 0 || marks > 100){
    console.log("theek se input de bhen ke.....");
}
if(marks >= 90){
    console.log("A grade");
}else if(marks >= 80){
    console.log("B grade");
}else if(marks >= 70){
    console.log("C grade");
}else{
    console.log("Fail");
}

