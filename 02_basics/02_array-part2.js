// const batsmen = new Array("Sachin", "Virat", "Rohit", "Pujara");
// const bowlers = new Array("Bumrah", "Shami", "Kuldeep", "Siraj");
// const allrounders = new Array("Jadeja", "Ashwin", "Hardik", "Sundar");

// const Players = batsmen.concat(bowlers); // in this way we can probably add only two arrays
// console.log(`${Players} and type of players is ${typeof Players}`);

// const team = [...batsmen, ...bowlers, ...allrounders]; // spread in this we can add more than one array
// console.log(`${team} and type of team is${typeof team}`);

// const a = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const b = a.flat(Infinity); // it converts the array into one array
// console.log(b);

// console.log(Array.isArray("shubham"));
// console.log(Array.from("shubham")); // easily understand and convert the string into an array
// console.log(Array.from({ name: "shubham" })); // connot conert it because it does understand what to convert either key or value

// Converting variables into array
let name = "shubham";
let age = 21;
let gender = "Male";

const convertedArray = Array.of(name, age, gender); //added all the varaibles into one variable and converted it into array
console.log(convertedArray);
