let array = ["beautiful", "strong", "fast", "aggly"];
function describeMe() {
  let name = prompt("What's your name?");
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(name, "is", array[randomNumber]);
}
describeMe();

// Kreirame arej so 4tri string elementi ex: "Strong", "Smart", "Fast"....
let descArr = ["Strong", "Smart", "Fast", "Beautiful"];
//Kreirame funkcija bez prametri ex: funtion imeNaFunkija() { }
function nameDescripiton() {
  // Vo block scope-ot na samata funkcija kreirame variabla Sto ke povikuva prompt("What's your name ?");
  let name = prompt("What's your name ?");
  // Pot samata variabla za imeto kreirame variabla sto ke zacuvuva random  broj od 0 do 3
  let randomNumber = Math.floor(Math.random() * 4);
  // Na kraj od funkcijata povikuvame console.log(ImetoNaVariablataPromt, "is", imetoNaArejot[randomBrojot])
  console.log(name, "is", descArr[randomNumber]);
}
// I na kraj ja povikuvame funkcijata
nameDescripiton();
