// kreiranje na prazen array
let shoppinList = [];

// Dodavanje na element vo array-ot so povikuvanje na metodot push()
shoppinList.push("Milk");
// Dodavanje na element vo array-ot so povikuvanje na metodot push()
shoppinList.push("Bread");
// Dodavanje na element vo array-ot so povikuvanje na metodot push()
shoppinList.push("Apples");

// Naoganje na index na odereden element vo array indexof();
let breadIndex = shoppinList.indexOf("Bread");
// Dodavanje na elementi pred odreden element (breadIndex) so brisenje na samiot element
shoppinList.splice(breadIndex, 1, "Bananas", "Eggs");

//Brisenje i zacuvuvanje vo varijabla na posledniot element.
let lastItem = shoppinList.pop();

console.log(lastItem);

//Sortiranje na arrey-ot vo slucajov po azbucen red
shoppinList.sort();

// Naoganje na index na odereden element vo array indexof();
let milkIndex = shoppinList.indexOf("Milk");
console.log(milkIndex);

// Naoganje na index na odereden element vo array indexof()
let bananasIndex = shoppinList.indexOf("Bananas");
// Dodavanje na elementi posle odreden element (bananasIndex + 1)
shoppinList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

// Kreiranje na array so dve vrednosti.
let newShoppingList = ["Juice", "Pop"];

// Konkatiniranje(spojuvanje) na array so drug array.
let combinedShoppingList = shoppinList.concat(newShoppingList, newShoppingList);
// Naoganje na posledniot index na odereden element vo array lastIndexOf();
let lastIndexOfPop = combinedShoppingList.lastIndexOf("Pop");
console.log(lastIndexOfPop);
//Logiranje vo konzola array
console.log(combinedShoppingList);