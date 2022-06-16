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
