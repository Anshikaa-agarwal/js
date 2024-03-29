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


//OPERATIONS
const str1 = "abc";
const str2 = "def";
console.log(str1 + " " + str2);   //string concaten
console.log(typeof(1));
console.log(typeof(1+2));
console.log((1+"2"));
console.log(typeof(1+"2"));
console.log((1+2+"2"+2+1));
console.log("5"*3);


//random
console.log(true);
console.log(""+true);
console.log(typeof(""+true));
console.log(4+true);
console.log("abc"+true);
console.log("abc"+false);
console.log(+true);
console.log(+false);
console.log(typeof(+false));
console.log(+"");

console.log(Math.round(6/8));    //rounds to the nearest integer
let x = 5;
console.log(x);
console.log(++x);
console.log(x++);


//Comparision of datatypes
console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2=="2");
console.log(2==="2");
console.log("02">1);
console.log(null==0);
console.log(null>0);
console.log(null>=0); //comparasion and euquality operators work differently in js.
                      //comparision converts null into 0, whereas equality does not.
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);
console.log(2==="2"); //checks value as well as datatype, therefore it will return false

//type coercion 
console.log("5"-"2");   //string is converted to number before performing arithmetic operation