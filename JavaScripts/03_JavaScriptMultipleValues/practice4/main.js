let company = {
    companyName: "Healthy Candy",
    activity: ["food manufacturing", "improving kid's health", "manufacturing toys"],   
    address:{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida",
    },
    yearOfEstablishment: 2021
};

company.address.zipcode = "33117";
company["address"]["number"] = "100";
console.log(company.address.zipcode);
let activity = company.activity[1];
console.log(company.activity[1]);