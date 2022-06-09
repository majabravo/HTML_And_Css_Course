class person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
let person1 = new person("Maja", "Bravo");
let person2 = new person("Boban", "Strezovski");

console.log("Hello", person1.fullName());
console.log("Hello", person2.fullName());
