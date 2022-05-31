let myArray = [];
for (let i = 0; i < 7; i++) {
  let myObject = {
    name: "Lesson " + (i + 1),
    status: i % 2 === 0,
  };
  myArray.push(myObject);
}
console.log(myArray);
