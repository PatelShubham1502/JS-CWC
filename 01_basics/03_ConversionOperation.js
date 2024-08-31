let score = "33";
console.log(score);
console.log(typeof score);

/*
    "33" => 33
    "33abc" => nan
    true => 1
    false => 0
*/

let valueOfScore = Number(score); // converted score(string) into number
console.log(typeof valueOfScore);

console.log(valueOfScore); // does not print the value because number connot ne in alphabets
console.log("-----------------------------------------");

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

/* 
    1 => true ; 0 => false
    "" => false
    "shubham " => true
*/

console.log("-----------------------------------------");
let n = 789;
let stringN = String(n);
console.log(stringN);
console.log(typeof stringN);

/* ******************* Operations ************************* */
console.log(
  "-------------------------  Operations ------------------------------------"
);

let value = 5;
let negativeValue = -value;
// console.log(negativeValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 3);
// console.log(2 / 2);
// console.log(2 ** 3);
// console.log(2 % 2);

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // here it will not add the number
console.log("1" + (2 + 2)); // but here it will add the number
console.log(1 + 2 + "2"); // here it will add the first 2 numbers than put the string value
/* if the first value is string then the whole value will be converted to string */

console.log("-----------------------------------------");
let counter = 100;
// counter++;
// console.log(counter);

// ++counter;
// console.log(counter);

let x = 3;
const y = x++;
console.log(x, y);

let p = 3;
const q = ++p;
console.log(p, q);
