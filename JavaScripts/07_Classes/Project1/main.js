class Person {
  constructor(firstname, lastname, yearsWorked) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yearsWorked = yearsWorked;
  }
}
let arrayOfPersons = [];
let person1 = new Person("Maja", "Bravo", 16);
let person2 = new Person("Boban", "Strezovski", 10);
let person3 = new Person("Ljupcho", "Shemov", 15);

arrayOfPersons.push(person1, person2, person3);

Person.prototype.bio = function () {
  return (
    this.firstname +
    " " +
    this.lastname +
    " Worked for " +
    this.yearsWorked +
    " years"
  );
};
arrayOfPersons.forEach((element) => {
  console.log(element.bio());
});

for (let i = 0; i < arrayOfPersons.length; i++) {
  const element = arrayOfPersons[i];
  console.log(element.bio());
}
