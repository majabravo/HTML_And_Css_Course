function sayHallo() {
  let you = prompt("What's your name? ");
  console.log("Hallo", you + "!");
}

// sayHallo();

function addTwoNumber(num1, num2, num3) {
  console.log("First parametar: " + num1);
  console.log("Second parametar: " + num2);
  console.log("Third parametar: " + num3);
  console.log(num1 + num2);
}

//addTwoNumber(10, 20);
//addTwoNumber(30, 20);

let varFunctionAddTwoNumbers = function (x, y) {
  console.log(x + y);
};

//varFunctionAddTwoNumbers(10, 10);
//varFunctionAddTwoNumbers(20, 20);

let arrowFunctionAddTwoNumbers = (param1, param2) =>
  console.log(param1 + param2);
let arrowFunctionSayHallo = (x) => console.log("Hello", x + "!");
let arrowFunctionSayHalloArr = (...myArray) =>
  myArray.forEach((x) => console.log(x));

//arrowFunctionAddTwoNumbers(5, 1);
//arrowFunctionAddTwoNumbers(1, 3);

//arrowFunctionSayHallo("Boban");

let myArray = [5, 9, 10];
addTwoNumber(...myArray);
addTwoNumber(5, 9, 10);

let nameArray = ["Simona", "Ljupco", "Barabara"];

arrowFunctionSayHalloArr(...nameArray);
arrowFunctionSayHalloArr("Simona", "Ljupco", "Barabara");
