// /* Primitive Datatype -------- 7 types
//  String, Number, Boolean, Null, undefined, Symbol, BigInt
// */

// const score = 10;
// console.log(score);
// console.log(typeof score);

// const id = Symbol("132");
// const empid = Symbol("132");
// console.log(id === empid);

// const num = 7854551485485245247524524525n; // it is a bigint because we have wriiten n in the end of the numbber
// console.log(num);
// console.log(typeof num);

// /*
// Reference (Non primitive)
//     Array, object, Functions
// */

// const fruits = ["mango", "orange", "banana"]; // an array
// console.log(fruits);
// console.log(typeof fruits);

// // an object
// let myobj = {
//   name: "shubham",
//   age: 21,
// };

// // an object
// let obj = {
//   id: 123,
//   name: "sunil",
// };

// console.log(myobj);
// console.log(obj);

// const myFun = function () {
//   // a function created
//   console.log("function is");
// };

// myFun(); // function invoked or called

/* +++++++++++ Stack Memory (primitive)  ,  Heap Memory (non-primitive) ++++++++ */

let name = "Shubham";

let anotherName = name;
anotherName = "Sunil";

// console.log(name);

// console.log(anotherName);

let user1 = {
  email: "abc@gmail.com",
  upi: "abc@sbi",
};

let user2 = user1;

user2.email = "xyz@gmail.com";
console.log(user1.email);
console.log(user2.email);

/*
Note : In Stack the value of original variable cannot be changed by another variable, it gives the copy of it
       In Heap the value of original Object can be changed by another Object, it gives the reference of it  */
