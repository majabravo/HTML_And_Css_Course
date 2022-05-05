let language = "Javascript";
let message = `Let's learn ${language}` ;
console.log(message);

let testVeriable = 1;
let variableTestType1 = typeof (testVeriable);
let variableTestType2 = typeof (testVeriable);
console.log(variableTestType1);
console.log(variableTestType2);



let nrToStr = 10;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
console.log ("------------------")
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr,typeof strToNr);

let strToBool = "any string will return true";
strToBool=Boolean(strToBool);
console.log(strToBool, typeof strToBool);

console.log("-----------------------");
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log(nullToNr, typeof (nullToNr));
console.log("-----------------------");
let str2ToNr = "";
str2ToNr = Number(str2ToNr);
console.log(str2ToNr, typeof (str2ToNr));
