let myDate = new Date();

let monthArray = [
  "January",
  "February",
  "Martch",
  "April",
  "may",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

let date = myDate.getDate();
let year = myDate.getFullYear();
let month = myDate.getMonth();
let monthName = monthArray[month];

console.log(date.toString(), "-", monthName, "-", year.toString());
console.log(`${date}-${monthName}-${year}`);
