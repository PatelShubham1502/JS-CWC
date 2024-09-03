const score = 400;
// console.log(score);
// console.log(typeof score);

// another way of creating a variable using new keyword
const balance = new Number(400);
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2)); // 400.00

const number = 4564.689657;
// console.log(number.toPrecision(5));
// console.log(number.toPrecision(4));
// console.log(number.toPrecision(6));

const num = 12458796215;
// console.log(num.toLocaleString()); // us stantard
// console.log(num.toLocaleString("en-IN")); // indian stantard

// +++++++++++++++++++++++++  Maths +++++++++++++++++++++++++
// console.log(Math.abs(-458));
// console.log(Math.round(9.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(49));
// console.log(Math.max(45, 78, 35, 96, 41, 12));
// console.log(Math.min(45, 78, 35, 96, 41, 12));

// console.log(Math.random());
// console.log((Math.random() * 10 )+ 1); // give the output from 0 to 9

// console.log(Math.floor(Math.random() * 6) + 1);

// function otp() {    // not done yet
//   const min = 10;
//   const max = 20;
//   for (let i = 1; i <= 4; i++) {
//     const value = console.log(
//       Math.floor(Math.random() * (max - min + 1)) + min
//     );
//   }
// }
// otp();
