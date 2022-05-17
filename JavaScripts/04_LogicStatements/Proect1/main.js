// 1. First get a number from the user
//declarirame variabla so vrednost od prompt("Poraka do userot")

// 2. Ja zemame variblata od userot i ja convertirame vo broj Number(variabla)
// vrednosta od Number(variabla) moze da ja dodelime na samata variabla ili da si deklarirame nova

// 3. Traba da dobieme random broj so pomos Math.random() * 100 za da dobieme vrednost od 0 do 100
// ja zaokruzuvame vrednosta so Mathfloor(decimala);

// 4. deklarirame variabla prazna za poraka || example: let message;
//
/*

// 5. if() statment kade shto bi ja proverile logikata
if(brojotOdUser < randomBrojot){
    message = "Your number" + brojOdUser + "is smaler than" + randomBrojot;
} else if (brojOdUser === randomBrojot)
    message = "Your number" + brojOdUser + "is equal to" + randomBrojot;
} else if (brojOdUser > randomBrojot) {
        message = "Your number" + brojOdUser + "is grater than" + randomBrojot;

}else {
    message = "You enteres invalid number"
}

}
*/
// 6. ja prakjame porakata vo consola || example console.log (message);

let userInput = prompt("Enter a number from 0 to 10: ");
console.log("userInput");
let userNumber = Number(userInput);
console.log(userNumber);
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
let message;

if (userNumber < randomNumber) {
  message = `Your number ${userNumber} is smaller than ${randomNumber}`;
} else if (userNumber === randomNumber) {
  message = `Your number ${userNumber} is equal to ${randomNumber}`;
} else if (userNumber > randomNumber) {
  message = `Your number ${userNumber} is greter than ${randomNumber}`;
} else {
  message = "You entered an invalid number!";
}

alert(message);
