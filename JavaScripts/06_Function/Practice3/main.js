// 25. Write a JavaScript function that accept a list of country
// names as input and returns the longest country name as output.
// Go to the editor
// Sample function :
// Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

let arrOfCountries = [
  "United States of America",
  "Australia",
  "Germany",
  "North Macedonia",
];
arrOfCountries[4];
console.log(arrOfCountries[4]);
function longestCountryName(arr) {
  let longName = "";

  if (typeof arr === "object" && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (longName === "") {
        longName = element;
      } else if (longName.length < element.length) {
        longName = element;
      }
    }

    return longName;
  } else {
    return longName;
  }
}

let longestName = longestCountryName(arrOfCountries);
console.log(longestName, longestName.length);

//create a basic calcuator

let x = 12;
let y = 10;
let oprator = "-";

function basicCalculator(param1, param2, param3) {
  let result;
  let oparation = `${param1} ${param3} ${param2}`;

  switch (param3) {
    case "*":
      result = param1 * param2;
      console.log("The operation is multiplication", oparation, "= " + result);
      break;
    case "+":
      result = param1 + param2;
      console.log("The operation is sum", oparation, "= " + result);
      break;
    case "-":
      result = param1 - param2;
      console.log("The operation is subtraction", oparation, "= " + result);
      break;
  }
}

//basicCalculator(x, y, oprator);
//basicCalculator(5, 10, "-");

//Recursive functions

function getRecursive(num) {
  console.log(num);
  if (num > 0) {
    getRecursive(--num);
    num++;
  }
  console.log("End of call", num);
}
getRecursive(3);
