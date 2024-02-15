console.log("\nStart of Exercise 14")
let guests : String[] = ["Muhammad Ali Jinnah", "Albert Einstein", "Eminem"]

for (let i = 0; i<guests.length; i++){
    console.log("I would like to invite ",guests[i]," to dinner")
}

//Start of Ex 15
console.log("\nStart of Exercise 15")

console.log("\nUnfortunately, ",guests[1], "can't make it to Dinner!!")
console.log("\nIntital Guests list: ", guests)

let indextoremove : number = 1
guests.splice(indextoremove, 1)
console.log("\nGuests list after removing Guest: ", guests)

let newguest : string = "Junaid Jamshed"
guests.splice(indextoremove,0,newguest)

console.log("\nGuests list after adding Guest: ",guests)

console.log("\nNew Invitations")
for (let i = 0; i<guests.length; i++){
    console.log("I would like to invite ",guests[i]," to dinner")
}



