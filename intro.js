//var and const and let
let name = "abc";
age = 18;
place = "xyz";
let unnamed;
const nothing = null;
console.table([name, (age), place, unnamed]);
// We do not prefer using var because of its functional and block scope issue and hoisting problem in JavaScript. It is better to use const or let instead of var.

//datatypes
console.log(typeof nothing); 
console.log(typeof unnamed); 
console.log(typeof place); 

//conversion of datatypes
let num = "a";  //empty string - false, all other strings - true
                //1- true, 0 - false
console.log(typeof num + " : type of variable num");
newNum = Number(num);
boolNum = Boolean(num);
console.log(typeof newNum);
console.log(newNum); //NaN stands for not-a-number
console.log(boolNum);
