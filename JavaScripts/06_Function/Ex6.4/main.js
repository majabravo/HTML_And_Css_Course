// 1. Kreirame prazen array Example: let nameOfArray = [];
let resultArr = [];
// 2. Kreirame for loop koj bi iteriral 10 pati
// Example:   for (let i = 0; i < 10; i++) { }
/* 
   let i = 0;
   while(i < 10) {
      i++;
   }
*/
// 4. 5.
for (let i = 0; i < 10; i++) {
  let result = sumOfTwoNumbers(i * 5, i * i);
  resultArr.push(result);
}
// 3. Kreirame funcija sto prima 2 parametri i gi sobira parametrite
// i go vrakja nivniot resultat
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

// 6. logiraj go arrayot
console.log(resultArr);
