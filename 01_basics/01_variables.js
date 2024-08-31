const accId = 56;
let accEmail = "shubha12@gmail.com";
var pass = "123";
city = "surat"; //can be initialize like this but not useful
let accState; //initialize but not defined

// accId = 245 ;      * Not allowed in javasceipt to change the value of ConstantSourceNode

accEmail = "sunil@g.com";
pass = "4456789";
city = "navsari";

/*
        Please do not use var variables because of issue of block scope in javascript
*/

console.log(accId);

console.table([accId, accEmail, pass, city, accState]); // to display in a tabular format
