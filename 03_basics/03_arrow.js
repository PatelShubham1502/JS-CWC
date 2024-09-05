const user = {
  username: "shubham",
  age: 21,

  welcomeMsg: function () {
    console.log(`${this.username} , welcome to javascript`);
    console.log(this);
  },
};

// user.welcomeMsg(); // it takes the current value
// user.username = "sunil";
// user.welcomeMsg(); // prints the new value

// console.log(this);
// console.log(typeof this);

// ------- Arrow Function ----------

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(10, 20));

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(10, 20));

const addTwo = (num1, num2) => num1 + num2; //  we don not have to use the return keyword , mostly used in react
console.log(addTwo(10, 20));
