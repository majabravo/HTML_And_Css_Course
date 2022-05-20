let input = prompt("What is your age?");
console.log(input);

let age = Number(input);
let message;

if (age >= 21) {
  message = "You can enter and drink alcohol!";
} else if (age >= 19) {
  message = "You can enter but you can not drink alcohol";
} else {
  message = "You can not enter!";
}

console.log(message);
