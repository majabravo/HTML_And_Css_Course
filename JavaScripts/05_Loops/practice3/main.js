// Random broj od 1 do 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

let checkNumber = true;
let message = "Enter a nubmer between 1 and 10";

while (checkNumber) {
  let number = parseInt(prompt(message));

  if (number > randomNumber) {
    message = "You gueesed heighter then the number!!";
  } else if (number < randomNumber) {
    message = "You gueesed lower then the number!!";
  } else if (number === randomNumber) {
    alert("You gueesed the number you won!!");
    checkNumber = false;
  } else {
    message = "Prati bezveze informacija";
  }
}
