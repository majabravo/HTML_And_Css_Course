console.log("test");

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList.shift();// .shift se trga prviot arrey 
theList.pop();  // .pop go brishe posledniot ARRAY 
console.log(theList);

theList.unshift("FIRST"); //..unshift dodava eden array na pochetokot 
console.log(theList);

theList.splice(3, 4, "hello World");  // .splice dodavanje na array na odreden index  primer array.splice(3(pozicijaata od kade shto pochnuva za da se vnesi ), sledniot index e kolku elementi sakame da izbrishime primer pishime 4 ako sdakame da izbrishi 4 elementi ….plus dodavame vrednost vo “Hello World”
console.log(theList);

let index = theList.indexOf(true);  // indexOf e samiot metod za naoganje na indexot vo samiot element
theList(index) = "MIDDLE";
console.log(theList);

theList.push("LAST"); // so .push se dodava array na poslednata pozicija
