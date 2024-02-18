function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        carInfo.option = option;
    }
    return carInfo;
}
var carObject1 = store_car_info("Toyota", "Camry");
var carObject2 = store_car_info("Honda", "Civic", { color: "Black", sunroof: true });
var carObject3 = store_car_info("Ford", "Mustang", { color: "Grey", sunroof: false, suspensions: "Race" });
console.log("Car1: ", carObject1);
console.log("\nCar2: ", carObject2);
console.log("\nCar3: ", carObject3);
