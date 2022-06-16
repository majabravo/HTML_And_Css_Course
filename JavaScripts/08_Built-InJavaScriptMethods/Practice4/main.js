let currDateTime = new Date();
console.log(currDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(now2 + 3600 * 1000);
console.log(milliDate);

let specifcDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specifcDate);

let now = new Date();

now.setFullYear(2010);
console.log("Day of the week:", now.getDay());
console.log("Day of the month:", now.getDate());
console.log("Month:", now.getMonth() + 1);
console.log("Year:", now.getFullYear());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Time:", now.getTime());

let myDate = Date.parse("3/16/2021");

console.log(new Date(myDate).toLocaleDateString());
console.log(new Date(myDate).toString());
