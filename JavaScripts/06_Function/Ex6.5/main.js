let myVar = "1000";

(function () {
  let myVar = "Local 1000";
  console.log(myVar);
})();

console.log(myVar);

let resultVar = (function () {
  let myVar = "Local IIFE value";
  return myVar;
})();

console.log(resultVar);
console.log(myVar);

((param) => (myVar = param))("My var from parametar");

console.log(myVar);
