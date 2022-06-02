//kreirame variabla so vrednost od nekoj broj
let number = 6;
//keirame vtora variabla so vrednost od nekoj broj
let number1 = 98;
//kreirame treta variabla so nekoj operator ex:"-" ili "+"
let operator = "+";

//kreirame funkcija so tri parametri
//ex: function imeNaFunkcija(param1,param2,param3) {}
function myCalculator(paramNumber1, paramNumber2, paramOperator) {
  switch (paramOperator) {
    case "+":
      return paramNumber1 + paramNumber2;
      break;
    case "-":
      return paramNumber1 - paramNumber2;
      break;
    case "*":
      return paramNumber1 * paramNumber2;
      break;
    case "/":
      return paramNumber1 / paramNumber2;
      break;
  }
} // vo block scope na funcijata treba da napravime switch statment
/*
  ex: switch(param3) {
      case "+":
          return param1 + param2;
          break;
      case "-":
        return param1 - param2;
        break;
    }
*/

console.log(myCalculator(number, number1, operator));
console.log(myCalculator(10, 20, "+"));
console.log(myCalculator(10, 20, "-"));
