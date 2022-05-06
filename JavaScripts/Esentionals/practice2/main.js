console.log("test");

let nr1 = 10;
let nr2 = 4;

let result1 = nr1 * nr2;

console.log(nr1 + " * " + nr2 + " = " + result1);
console.log(`${nr1} * ${nr2} = ${nr1 * nr2}`);


 result1 = nr1 / nr2;
console.log(nr1 + " / " + nr2 + " = " + result1);
console.log(`${nr1} / ${nr2} = ${result1}`);
// % deklariranje na paren ili neparen - rezultatot e ostatokot shto ostanuva,primer ako e 0 e paren broj
result1 = nr1 % nr2;
console.log(nr1 + " % " + nr2 + " = " + result1);
console.log(`${nr1} % ${nr2} = ${result1}`);



// delcaration of a number
let incNumber = 0;
// incrementation of a number

++incNumber;
// loging the number in the console... koga saksh odredena brojka da ja zgolemish za 1 dodavash ++
console.log(incNumber);

let nr3 = 4;
let nr4 = 5;
let nr5 = 2;
// za rezultatot da ni bidi tochen vo consolata.log ++ se stavaat pred variablata 
console.log(nr3++ + ++nr4 * nr5++);
console.log(++nr3 + ++nr4 * ++nr5);