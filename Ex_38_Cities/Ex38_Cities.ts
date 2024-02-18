function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(city," is in ",country)
}

console.log("Same Country: ")
describe_city("Karachi")
describe_city("Lahore")
console.log("\nDifffernt Country: ")
describe_city("New York", "USA")
