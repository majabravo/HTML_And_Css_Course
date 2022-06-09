class Person {
  constructor(param1, param2) {
     this.firstName = param1;
     this.lastName = param2;
  }
}
​
let person1 = new Person("Boban", "Srezovski");
let person2 = new Person("Goran", "Cvetkovski");
​
console.log("Hello", person1.firstName, person1.lastName);
console.log("Hello", person2.firstName, person2.lastName);