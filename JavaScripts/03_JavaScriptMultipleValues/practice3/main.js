let myCar = {
    make: "Ford",
    model: "Fiesta",
    year: 2020,
    color: "red",
    automatic: false,
    aclerate(kmh) {
        return acc + kmh,
    }
};

let propertyVariable = "color";
myCar[propertyVariable] = "green";

console.log(myCar[propertyVariable]);

propertyVariable = "forSale";
myCar[propertyVariable] = false;

console.log(myCar.make + " " + myCar.model);

let message = "";

if (myCar[propertyVariable]) {
    message = "The car is for sale!"
} else {
    message = "The car is not for sale!"
}
console.log(message);