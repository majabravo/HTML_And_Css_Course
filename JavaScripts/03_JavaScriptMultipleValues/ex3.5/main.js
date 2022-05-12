let people = {
    friends: [],
}

let ime1={
firsName: "Bobi",
lastName: "Strezovski",
id: 2
}
let ime2={
    firstName: "Maja",
    lastName: "Tripunoska",
    id: 1
    }
 let ime3={
        firstName: "Maja",
        lastName: "Bravo",
        id:7
        }

people.friends.push(ime1,ime2,ime3);
console.log(people);
 

let car = {
    make:"Volkswagen",
    model: "Audi",
    color:"Gray",
    AutomaticShift: true
}
   console.log(car);
   car.tyre="winter";
   car.windshild="glass";
   car.color="green";

   car.forSale=true;
   console.log(car);

   if (car.forSale) {
       alert("Its for Sale");
       
   }else {
       alert("Its not for sale");
       
   }

