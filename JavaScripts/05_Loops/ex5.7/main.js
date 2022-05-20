let simpleObject = {
  Id: 1,
  type: "Ice cream",
  description: "milk product",
};
let array = [];
for (const prop in simpleObject) {
  console.log(
    "Name of prop: " + prop + " -- value of prop: " + simpleObject[prop]
  );
  array.push(simpleObject[prop]);
}
console.log(array);
