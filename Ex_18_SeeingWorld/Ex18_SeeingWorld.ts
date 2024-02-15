console.log("Step1: Places I would like to Visit...Storing the places in an Arry\n")
let places : string[] = ["Egypt", "Switzerland", "Alaska", "Las Vegas", "Tokyo"]
//Orginal Order
    console.log("Step2: Printing the Orignal Array in Orginal Order: ")
    console.log(places)

//Alphabetical order)
    console.log("\nStep3: Printing Array in Alphabetical order without changing the order of the list: ")
    console.log([...places].sort())

//Orginal Order
    console.log("\nStep4: Printing the Array to check if the Order has changed: ")
    console.log(places)
   
// Reverse Alphabetical order
console.log("\nStep5: Printing Array in Reverse Alphabetical order without changing the order of the list: ")
console.log([...places].reverse())

//Orginal Order
console.log("\nStep6: Printing the Orgianl Array to check if the Order has changed: ")
console.log(places)

// Reverse Alphabetical order
console.log("\nStep7: Changing the Array to Reverse Alphabetical order by changing the order of the list: ")
console.log(places.reverse())

//Orginal Order
console.log("\nStep8: Changing the Array back to its orignal order: ")
console.log(places.reverse())

// Alphabetical order
console.log("\nStep9: Changing the Array to Alphabetical order by changing the order of the list: ")
console.log(places.sort())

// Reverse Alphabetical Order
console.log("\nStep10: Changing the Array to Reverse Alphabetical order by reversing the sorted Array: ")
console.log(places.reverse())

