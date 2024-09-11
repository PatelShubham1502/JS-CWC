for (let index = 1; index <= 10; index++) {
  const element = index;
  if (element == 2) {
    // console.log("2 Fav Number");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myarr = ["flash", "batman", "superman"];
// console.log(myarr.length);

for (let i = 0; i < myarr.length; i++) {
  const element = myarr[i];
  //   console.log(element);
}

//Keywords: break and continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`datected 5`);
    break; //comes out of loop
  }
  //   console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`datected 5`);
    continue; //continues loop
  }
  //   console.log(`Value of i is ${index}`);
}

for (let i = 1; i <= 20; i++) {
  //   console.log(`Table of ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`${j} * ${i} = ${j * i}`);
  }
  //   console.log(`Table of ${i} completed`);
}

// let input = prompt("Enter a number which you want a table of : ");

// for (let i = 1; i <= 10; i++) {
//   document.write(`${input} * ${i} = ${input * i} </br> `);
// }
