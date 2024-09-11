// for of - mostly used in arrays

let myarr = [1, 2, 3, 4, 5];
for (const arr of myarr) {
  //   console.log(`${arr}`);
}

let Message = "Hello World!";
for (const msg of Message) {
  if (msg == " ") {
    continue;
  }
  //   console.log(`${msg}`);
}

//Maps - has unique value means collection of key value pairs
const map = new Map();
map.set("IN", "India");
map.set("USA", "United Sates of America");
map.set("Fr", "France");
map.set("IN", "India"); // does not print because it is already there
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}
