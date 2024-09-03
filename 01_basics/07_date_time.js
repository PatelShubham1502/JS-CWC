// let currDate = new Date();
// console.log(currDate.toString());
// console.log(currDate.toDateString());
// console.log(currDate.toLocaleString());

// let myDate = new Date(2023, 1, 15); //here the month start with 0 because of the index
// let myDate = new Date("1-15-2024");
// console.log(myDate.toLocaleString());
// console.log(myDate.getDate());

// let newDate = Date.now();
// console.log(newDate); // gives the milisecond time
// console.log(myDate.getTime());

// let d2 = new Date();
// console.log(d2);
// console.log(d2.getMonth() + 1);
// console.log(d2.getFullYear());

let newDate2 = new Date();
console.log(
  newDate2.toLocaleString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
);
