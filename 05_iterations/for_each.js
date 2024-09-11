//foreach - does not return any value

// const language = ["C", "Cpp", "Java", "Javascript", "Ruby"];

// language.forEach(function (item) {
//   console.log(item);
// });

// language.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// language.forEach(printMe);

// language.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// accessing object in arrays using foreach loop
const myCoding = [
  {
    languageName: "Javascript",
    languageExtension: "js",
  },

  {
    languageName: "Java",
    languageExtension: "java",
  },

  {
    languageName: "Python",
    languageExtension: "py",
  },
];

myCoding.forEach((language) => {
  //   console.log(language);
  //   console.log(language.languageName);
});
