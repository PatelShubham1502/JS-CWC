// Falsy Values are : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values are : "0", "false", " ", [], {}, function(){}

const email = "shubham@gmail.com";
// const email = "";
// const email = [];

if (email) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

const arr = [];
if (arr.length === 0) {
  console.log("array is empty");
}

const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Opeartor (??): works on null and undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = undefined ?? 15 ?? 20;

console.log(val1);

// Terniary Operator
// condition ? true : false

let a = 10;
a === 10 ? console.log("a = 10") : console.log("not = to 10");
