function calcFactorial(num) {
  console.log(num);
  if (num === 0) {
    return 1;
  } else {
    let result = num * calcFactorial(num - 1);
    console.log(result);
    return result;
  }
}
console.log(calcFactorial(5));
