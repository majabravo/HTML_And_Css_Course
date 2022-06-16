let myString = "I love Javascript";

function replaceVowels(str) {
  let myLowerCaseString = str.toLowerCase();
  let myVowelArray = ["a", "e", "i", "o", "u"];

  myVowelArray.forEach((Element, index) => {
    myLowerCaseString = myLowerCaseString.replaceAll(
      Element,
      myVowelArray.indexOf(Element)
    );
  });
  return myLowerCaseString;
}

console.log(replaceVowels(myString));
