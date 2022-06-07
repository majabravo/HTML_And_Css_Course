function logName() {
  console.log("Maja");
}

function logNameWithParams(ime) {
  console.log(ime);
}
console.log("Prvo ime");

//1. variabla shto zachuvuva broj na minuti primer: 360;
let minutes = 360;
//2. Kreirame funkcija koja prima eden parametar.
// pr: function imeNaFunkcija(parametar) {
//}

//function minutesToHuurs(min) {

//}
//3. Vo samata funkcija kreirajte variabla shto bi go zachuvala rezultatot
//samiot rezultat e parametarot / 60 (deleno so 60)
//4. Napravete return na samata variabla so rezultatot ;

function minutesToHours(min) {
  let result = min / 60;
  return result;
}

// 5. Treba da se povika samata funkcija so zachuvanata prva variabla kako argument
//pr:imeNaFunkcija(argumentot)

//6. Povikuvanjeto na funkcijata treba da bide vrapnato vo console.log()
//pr: console.log(imeNaFunkcija(argumentot));
console.log(minutesToHours(minutes));

minutes = 390;
console.log(minutesToHours(minutes));
