console.clear();
import { Dog } from "./js/Dog.js";
import { Car } from "./js/Car.js";

const rexas = new Dog('Rexas', 'black');
console.log(rexas);

console.log(rexas.state);

console.clear();

const bulka = new Car('Audi', '80', 'red', 800, 60);
console.log(bulka);


console.log(bulka.engineStart());
console.log(bulka.engineStart());
console.log(bulka.engineStop());
console.log(bulka.engineStop());
console.log(bulka.engineStart());
console.log(bulka.engineStop());

console.log(bulka.fillTank(25));
console.log(bulka.fillTank(25));
console.log(bulka.fillTank(30));
console.log(bulka.fillTank(30));

console.log(bulka.engineStart());
console.log(bulka.drive(30));
console.log(bulka.drive(50));
console.log(bulka.tankLevel);
console.log(bulka.currentMileage());
console.log(bulka.drive(30));
console.log(bulka.fillTank(40));
console.log(bulka.drive(30));
console.log(bulka.engineStart());
console.log(bulka.drive(30));

console.log(bulka.currentMileage());
console.log(bulka.drive(30));
console.log(bulka.currentMileage());