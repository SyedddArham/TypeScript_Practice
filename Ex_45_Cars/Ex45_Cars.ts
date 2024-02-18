function store_car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        carInfo.option=option;
    }

    return carInfo;
}

let carObject1 = store_car_info("Toyota", "Camry");
let carObject2 = store_car_info("Honda", "Civic", { color: "Black", sunroof: true });
let carObject3 = store_car_info("Ford", "Mustang", { color: "Grey", sunroof: false, suspensions: "Race" });
console.log("Car1: ",carObject1);
console.log("\nCar2: ",carObject2);
console.log("\nCar3: ",carObject3);