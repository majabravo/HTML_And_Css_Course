//let object = {
//name: "Lesson 1",
//status: false,
//};
// let stat = false;
let myWork = [];

for (let i = 0; i < 10; i++) {
  // console.log(i);
  //stat = !stat
  myWork.push({
    name: "Lesson " + i,
    status: i % 2 === 0 ? true : false,
  });
}

console.log(myWork);

for (let i = 0; i < 3; i++) {
  console.log("First loop iteration = " + i);

  console.log("---------------------");

  console.log("----------Second loop start--------");
  for (let j = 0; j < 5; j++) {
    console.log("Second loop iteration 'i' = " + i);
    console.log("Second loop iteration 'j' = " + j);
    console.log("---------------Second loop end ---------");
  }
  console.log("-------------First loop end--------------------");
}
console.log(myWork);
