class MenuItems {
  #burger = 180;
  #pizza = 230;
  constructor(amountOfBurgers, amountOfPizzas) {
    this.amountOfBurgers = amountOfBurgers;
    this.amountOfPizzas = amountOfPizzas;
  }
  calculatePrice() {
    let sumOfBurgersPrice = this.amountOfBurgers * this.#burger;
    let sumOfPizzasPrice = this.amountOfPizzas * this.#pizza;
    let sum = sumOfBurgersPrice + sumOfPizzasPrice;
    return sum;
  }
  get getPrice() {
    return this.calculatePrice();
  }
}

let order1 = new MenuItems(6, 2);
let order2 = new MenuItems(4, 1);
let order3 = new MenuItems(1, 2);

let arrayOfPrices = [];
arrayOfPrices.push(order1, order2, order3);
console.log(arrayOfPrices);

console.log("Total price of first order:", order1.getPrice + " den ");
console.log("Total price of second order:", order2.getPrice + " den ");
console.log("Total price of third order:", order3.getPrice + " den ");
