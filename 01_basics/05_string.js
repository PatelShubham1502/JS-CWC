// console.log("hello " + "world");

const name = "Shubham Patel ";
const age = 21;

// console.log(name + age);
// console.log(`Hello my name is ${name} and my age is ${age} `); // String Interpolation

// Another way of declaring variable using new keyword

const empName = new String("Shubham Patel ");
// console.log(empName);
// console.log(empName[5]);
// console.log(empName.length);
// console.log(empName.toUpperCase());
// console.log(empName.charAt(10));
// console.log(empName.indexOf("m"));
// console.log(empName.treim());   // removes extra spaces

// const newString = empName.substring(0, 7);
// console.log(newString);

const anotherString = empName.slice(-6, -1);
console.log(anotherString);

// const url = "https://shubham.com/shubham%20patel";
// console.log(url.replace("%20", "-"));

// console.log(url.includes("sunil"));

const email = "Today I am learning about strings in javascript .";
// console.log(email.split(" "));
// console.log(email.split(" ", 5));
