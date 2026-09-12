/*
- there are two categories of data in JavaScript based on how they store on the memory and how to access them. Primitive and Non-Primitive.
*/ 

/*
Primitive:
String, Number, Boolean, Null, Undefined, Symbol (is used to make a value unique), BigInt
*/

/*
Reference Type or Non-Primitive:
Array, Object, Function
*/ 

// JavaScript is a dynamically typed language. This means that type checking is performed at runtime (while the program is running) rather than at compile time.

const id = Symbol("123")
const anotherId = Symbol("123")

console.log({id, anotherId});

console.log(id === anotherId);
console.log(id == anotherId);



//  ++++++++++++++++++++++++++++++++++++

// Two types of memory are: Stack (Primitive), Heap(Non-Primitive/reference)