let firstString = "Zdravo ";
let secondString = "Svetu";

console.log(firstString + secondString + "!");
console.log(firstString.concat(secondString, "!"));

let result = "Hello JavaScript how are you?";
let arr_result = result.split(" ");
console.log(arr_result);

let result2 = "Boban,Simona,Ljupco,Barbara";
let arr_result2 = result2.split(",");
console.log(arr_result2);

arr_result2.forEach((element) => {
  let hello = "Hello ";
  if (element === "Boban") {
    console.log(hello.concat(element, "!"));
  }
});

let stringArr = ["H", "e", "l", "l", "o", 5];
console.log(stringArr.join(""));

let stringPoem =
  "Roses are red, Violets are blue, if I can do JS, then you can too!";
let index_re = stringPoem.indexOf("red");
console.log(index_re);
console.log(stringPoem.slice(15, 22));

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Bobby");
console.log(new_hi);

let new_hi2 = new_hi.replace("Hi", "Hello");
console.log(new_hi2);

let helloHello = "hello hello";
let h2 = helloHello.replaceAll("hello", "oh");
let h2Upper = h2.toUpperCase();
console.log(h2Upper);
