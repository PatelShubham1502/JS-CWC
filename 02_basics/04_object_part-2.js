// // * Singleton Objct

// // const obj = {};  // one way of creating object

// const user = new Object();
// user.id = "123abc";
// user.name = "Shubham";
// user.age = "21";
// user.isLoggedIn = false;
// console.log(user);

// Declaring Object inside an Object

// const person = {
//   Company: "TCS",
//   Dept: "Operation Manager",
//   personalDetails: {
//     fullName: {
//       firstName: "Shubham",
//       lastName: "Patel",
//     },
//     age: 21,
//   },
// };

// console.log(person["personalDetails"]["fullName"]["firstName"]);
// console.log(person.personalDetails.fullName.lastName);

// merging two objects

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = Object.assign({}, obj1, obj2); //{} refers to target and other are the source
const obj3 = { ...obj1, ...obj2 }; //best way spread
// console.log(obj3);
// console.log(obj1);
// console.log(Object.keys(obj2)); // returns the key
// console.log(Object.values(obj2)); // returns the value
// console.log(Object.entries(obj2)); // returns the entries
console.log(obj3.hasOwnProperty("3")); //checks wether the property is there in the object or not

const users = [
  {
    id: 1,
    name: "abc",
  },

  {
    id: 2,
    name: "xyz",
  },

  {
    id: 3,
    name: "pqr",
  },
];

console.log(users[1]);
console.log(users[2]);
