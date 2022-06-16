let arrOfNumbers = [23, 12, 55, 100, 125, 3];
let modifiedArray = arrOfNumbers.map(function (element) {
  return element * 2;
});

let modifiedArray2 = arrOfNumbers.map((x) => x * 2);
console.log(arrOfNumbers, modifiedArray, modifiedArray2);
