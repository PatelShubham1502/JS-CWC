var a = 10; // accesed anywhere in a program
let b = 20;
const c = 30;

if (true) {
  var a = 100; // accesed anywhere in a program
  let b = 200;
  const c = 300;

  // console.log(a);
  // console.log(b);
  // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Do not use var anywhere in the program

function one() {
  const username = "shubham";

  function two() {
    const website = "youtube";
    // console.log(username); // here username can be accesed
  }

  // console.log(website); // here website cannot be accesed because scope of website is limited in the function two

  two();
}

// one();

if (true) {
  const username = "shubham";
  if (username === "shubham") {
    const website = "youtube";
    // console.log(username, website);     // it can print
  }
  // console.log(website);    // cannot access it due to scope
}

// console.log(username); // same here cannot access beacuse it is out of scope

// +++++++++++++ Hoisting

addOne(); // here it can be called beacuse it does not have nay variable which holds it
function addOne() {
  console.log("this is function one");
}

addTwo(); // here this function cannot be called because it has a variable
const addTwo = function () {
  console.log("This is function Two");
};

addTwo();
