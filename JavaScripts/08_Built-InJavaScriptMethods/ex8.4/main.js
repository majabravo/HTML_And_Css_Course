let string1 = "thIs will be capiTalized for each word";
function myFunc(params) {
  let newString = params.toLowerCase();
  let newString_array = newString.split(" ");
  let newArr = [];
  newString_array.forEach((element) => {
    let firstWord = element.charAt(0).toUpperCase();
    let restOfWord = element.slice(1);
    newArr.push(firstWord.concat(restOfWord));
  });
  newString = newArr.join(" ");
  return newString;
}
console.log(myFunc(string1));
// primer 2 za istata zadacha 

let myString = "thIs will be capiTalized for each word";

function capitalizedWords(str) {
   let myLowerCaseString = str.toLowerCase();
   let myCapitalizedArray = []; // instancirajte nov array
   let myStringArray = myLowerCaseString.split(" "); // variablata so string so mali bukvi.split(" ");

   // for loop
   for (let i = 0; i < myStringArray.length; i++) {
      let firstLetter = myStringArray[i].slice(0, 1);
      firstLetter = firstLetter.toUpperCase(); // transformirame vo golema bukva .toUpperCase();
      let restOfWord = myStringArray[i].slice(1);
      let wholeWord = firstLetter + restOfWord; // bukvata spoena so ostatok od zborot
      myCapitalizedArray.push(wholeWord);
      // myCapitalizedArray.push(firstLetter.concat(restOfWord));
   }

   let newCapitalizedWords = myCapitalizedArray.join(" ");
   return newCapitalizedWords;
}

console.log(capitalizedWords(myString));