//console.log(Math.PI);

let ceil = Math.ceil(5.7);
let floor = Math.floor(5.7);
let round = Math.round(5.7);
let round2 = Math.round(5.4);

// console.log("Ceil:", ceil);
// console.log("floor:", floor);
// console.log("Round:", round);
// console.log("Round2:", round2);

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor((Math.random() * 10) + 1));
// console.log(Math.floor((Math.random() * 100) + 1));
// console.log( Math.random());

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let i = 0;
// while (i < 100) {
//    console.log("Sluchaen broj:", generateRandom(1, 100));
//    i++;
// }

for (let i = 0; i < 100; i++) {
  console.log("Sluchaen broj:", generateRandom(1, 100));
}
