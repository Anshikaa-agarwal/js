let name = "abc";
age = 18;
place = "xyz";
let unnamed;
const nothing = null;
console.table([name, age, place, unnamed]);
// We do not prefer using var because of its functional and block scope issue and hoisting problem in JavaScript. It is better to use const or let instead of var.

console.log(typeof nothing); 
console.log(typeof unnamed); 
console.log(typeof place); 