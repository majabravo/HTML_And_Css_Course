// 1. deklarirame variabla so nekoj broj na kilometri
let km = 130;
// 2. deklarirame constata so vrednost od 1.60934
// Primer: const imeNaKonstanta
const conversionRatio = 1.60934;
// 3. deklarirame variabla so pomnozeni kilometri so 1.60934
let miles = km * conversionRatio;
/* 
 Ja prezentirame vrednosta vo console
 Primer: `pisuvame odreden text ${variabla} pak text ${variabla} zavrsuvame so text`
*/

console.log(`The distance of ${km} km is equal to ${miles} miles`);
console.log(`The distance of ${miles} miles is equal to ${miles / conversionRatio} kms`);