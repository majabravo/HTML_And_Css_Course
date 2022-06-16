let arr = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];
let filteredArr = arr.filter((element, index, arej) => {
  // console.log(element, "at position", index);
  // console.log(arej.indexOf(element), "is equal to", index, arej.indexOf(element) === index);

  return arej.indexOf(element) === index;
});
console.log(filteredArr);
