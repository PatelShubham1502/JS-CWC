// Immediately Invoked Function Expression (IIFE)  : used to remove the pollution of the global varaible

// syntax :
// (
//     function(){}
// ) ("this parenthisis is to run the function")

// this function is a name iife because it has a name "msg"
(function msg() {
  console.log("This function is executed immediately using IIFE .");
})(); // ; required to terminate the IIFE

// using arrow function with IIFE
//
(() => {
  console.log("IIFE  using arrow function");
})();

((name) => {
  // can also pass parameter
  console.log(`${name} `);
})("shubham");
