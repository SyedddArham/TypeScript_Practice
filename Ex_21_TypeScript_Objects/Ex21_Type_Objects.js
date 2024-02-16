"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Using the List made in Exercise 20");
var Ex20_StoreArray_1 = require("../Ex_20_StoreArray/Ex20_StoreArray");
var car_description = {
    "GT-R": { company: "Nissan", description: "The Nissan GT-R (Gran Turismo–Racing; model code: R35; Japanese: 日産・GT-R; Nissan GT-R) is a car built by Japanese marque Nissan since 2007. It has a 2+2 seating layout and is considered both a sports car and a grand tourer. The engine is front-mid mounted and drives all four wheels." },
    "Mustang": { company: "Ford", description: "The namesake of the 'pony car' automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by 'long hood, short deck' proportions." },
    "Charger": { company: "Dodge", description: "6.2L Supercharged High-Output HEMI® SRT Hellcat V8 Engine with 807 hp. 20-Inch Carbon Black Lightweight Aluminum Wheels. Jailbreak I/P Badge. Multiple Customization Options on Seats, Seat Belts, Floor Mats, Rims, and Stripes." },
    "Supra": { company: "Toyota", description: "The most impressive fact is that with some relatively simple modifications, this engine could reach 600 horsepower without breaking. All engines have a certain limit regarding how much you can tune them before they break. That limit on the 2JZ is extremely high and this is mainly due to its design" }
};
for (var i = 0; i < Ex20_StoreArray_1.cars.length; i++) {
    var car = Ex20_StoreArray_1.cars[i];
    var details = car_description[car];
    console.log("\nCar Name: ", car, "\nCompany: ", details.company, "\nDetails: ", details.description);
}
