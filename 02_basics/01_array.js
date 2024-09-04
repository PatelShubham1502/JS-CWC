// const arr = [1, 2, 3, 4, 5];
// console.log(arr); // logs the whole array
// console.log(arr[3]); // logs the element of that index

// console.log(arr.push(6)); //  add new element at the last
// console.log(arr);

// console.log(arr.pop()); // removes the last element
// console.log(arr);

// console.log(arr.unshift("array")); // add the element at the starting of the array
// console.log(arr);

// console.log(arr.shift()); // removes the element of the starting of the array
// console.log(arr);

/* There are two ways to copy array in js : 
    Shallow copy(uses the reference means changes the original array) and 
    Deep copy (does not uses the reference which means it does not change the original array ) */

// ++++++++++++++++  Array Methods ++++++++++++++++++++++++++++++++++

// const newarr = new Array();
// newarr.push(1, 2, 3, 4);
// newarr.pop();
// newarr.unshift("shubham");
// console.log(newarr);
// newarr.shift();
// console.log(newarr);
// console.log(newarr.includes("sunil"));

// const arr = new Array(1, 2, 3, 4, 5, 6);
// const newArr = arr.join(); // converts the array into string
// console.log(arr);
// console.log(`${newArr} and type of new array is ${typeof newArr}`);

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const arrSlice = numbers.slice(2, 5); // returns the array from the index 2 to 4 excludes the fifth element
// console.log(arrSlice);
// console.log(numbers); // does not change the original array

const newNumber = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
const arrSplice = newNumber.splice(1, 4); // returns the array from the index 1 to 3, excludes the fourth element
// ------ we can also write splice(4,2) removes from fourth index and removes 2 element
console.log(arrSplice); //
console.log(newNumber); // changes the original array
