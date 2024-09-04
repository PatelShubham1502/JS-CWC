// Two types of object
// * Singleton - object.create

// * Object Literals
const mySym = Symbol("Bat"); // created symbol

const user = {
  name: "Shubham",
  fullname: "Shubham Patel",
  age: 21,
  [mySym]: "Ball", //using symbol with [] outside the name of the symbol inside an object
  city: "surat",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(user.city); // one way which does not require any " " while accessing
// we will use this technique which requires " "
// console.log(user["fullname"]);
// console.log(user["age"]);
// console.log(user[mySym]); // accessing symbol

user.age = 22;
// console.log(user["age"]);

// Object.freeze(user); // does not allow to change the value onwardS
// console.log(user);

user.greeting = function () {
  // greetings becomes the function
  console.log("Hello Js User ");
};

user.greetingTwo = function () {
  // greetings becomes the function
  console.log(`Hello Js User ${user.fullname}`);
};

console.log(user.greeting());
console.log(user.greetingTwo());
