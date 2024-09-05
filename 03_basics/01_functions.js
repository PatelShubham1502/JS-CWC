// function sayMyName() {
//   console.log("shubham");
//   console.log("patel");
// }

// sayMyName();

function addTwoNumbers(num1, num2) {
  // parameters
  let sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  //   return num1 + num2;   // can also be written like this without any extra varaiable
  return sum; // if you do not return the value than function will print the log but it will not return any value
}

// addTwoNumbers(10, 20); // arguments
// addTwoNumbers(10, "20");
// addTwoNumbers("10", 20);

// const result = addTwoNumbers(10, 20);
// console.log(result);

function loginUserMessage(username = "shubham") {
  //here shubham is the default value
  if (!username) {
    console.log("please eneter username");
    return;
  } else {
    return `${username} just logged in`;
  }
}

// loginUserMessage("shubham"); // here the function has only returned the value not print
// console.log(loginUserMessage("sunil"));

// Here ...num1 is a rest operator used when we do not know how many input will be given into a function
function calaculateCartPrice(val1, val2, ...num1) {
  console.log(val1); // first value of function will go into val1
  console.log(val2); // second value of function will go into val2

  return num1; // rest all values will go into num1 in the form of array
}

// console.log(calaculateCartPrice(100, 200, 500, 600, "shubham"));

const user = {
  username: "shubham",
  age: 21,
};

function handleObject(details) {
  console.log(
    `The name of user is ${details.username} and age is ${details.age}`
  );
}

// handleObject(user); // passing an object inside a function

// **without craeting object outside like above
// handleObject({
//   // creating object inside a function
//   username: "sunil",
//   age: 20,
// });

const numbers = [10, 20, 30, 40];

function myNewNumber(getArray) {
  return getArray[1];
}

// console.log(myNewNumber(numbers));

console.log(myNewNumber([50, 60, 70]));
