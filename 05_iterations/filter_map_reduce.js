//fileter returns values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "Book One",
    genere: "Fiction",
    publish: 1981,
    price: 499,
  },

  {
    title: "Book Two",
    genere: "Non-Fiction",
    publish: 1985,
    price: 699,
  },

  {
    title: "Book Three",
    genere: "History",
    publish: 2005,
    price: 799,
  },

  {
    title: "Book Four",
    genere: "Science",
    publish: 1992,
    price: 899,
  },

  {
    title: "Book Five",
    genere: "Mathematics",
    publish: 2002,
    price: 599,
  },
];

const userBooks = books.filter((bk) => {
  if (bk.genere === "Science" && bk.price === 899) {
    return bk.genere;
  }
});
// console.log(userBooks);

// map -- returns itself--------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = numbers.map((num) => {
//   return num + 10;
// });
// console.log(newNumbers);

//chaining---------
const newNumbers = numbers.map((num) => num * 10).map((num) => num + 1);
const newNumbers2 = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
// console.log(newNumbers);
// console.log(newNumbers2);

// reduce ----------------------------- mostly used incart
const n1 = [1, 2, 3, 4];

// const sum = n1.reduce(function (acc, currval) {
//   console.log(`acc ${acc} currentval ${currval}`);

//   return acc + currval;
// }, 0);
// console.log(sum);

const sum = n1.reduce((acc, currval) => acc + currval, 0);
// console.log(sum);

//---------------------------------------------------------------
const cart = [
  {
    language: "javascript",
    price: 1999,
  },

  {
    language: "Php",
    price: 999,
  },

  {
    language: "Java",
    price: 2999,
  },

  {
    language: "Python",
    price: 2499,
  },
];

const priceToPay = cart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
