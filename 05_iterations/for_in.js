//forin - for objects
const myObj = {
  js: "javsScript",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObj) {
  //   console.log(`${key} is the extension of ${myObj[key]} file`);
}

const arr1 = ["ja", "java", "cpp", "css"];
for (const key in arr1) {
  console.log(arr1[key]);
}
