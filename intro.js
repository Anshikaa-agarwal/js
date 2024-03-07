let name = "abc";
age = 18;
place = "xyz";
let unnamed;
console.table([name, age, place, unnamed]);
// We do not prefer using var because of its functional and block scope issue and hoisting problem in JavaScript. It is better to use const or let instead of var.