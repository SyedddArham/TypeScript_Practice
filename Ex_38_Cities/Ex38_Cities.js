function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city, " is in ", country);
}
console.log("Same Country: ");
describe_city("Karachi");
describe_city("Lahore");
console.log("\nDifffernt Country: ");
describe_city("New York", "USA");
