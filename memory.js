// stack (primitive data type), heap(non primitive data type)
// 1. Stack: A stack is a linear data structure that follows the Last In First Out (LIFO) principle. 


// Stack gives copy, heap gives reference of variable, i.e, if we change value in heap then it will reflect in both places as they are same memory location.
// But if we change in stack, original won't be changed as it gives a copy.

//Examples,
let a = "hello";
let b = a;
b = "new";

console.log(a);
console.log(b); //value of b changes without changing value of a.

//In JavaScript, objects are passed by reference and primitives are passed by value.
//2. Heap: The term 'heap' refers to memory allocated for variables other than local variables. 

let user1 = {
    Name: "abc",
    age: 18
}
let user2 = user1;
user2.age=20;
console.log(user1.age);
console.log(user2.age); //both will print 20 because both refer to same object in heap.
//idhr changes seedha memory me honge