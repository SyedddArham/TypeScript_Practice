let guests : String[] = ["Muhammad Ali Jinnah", "Albert Einstein", "Eminem"]

console.log("I would like to invite ",guests[2]," to dinner")
console.log("I would like to invite ",guests[1]," to dinner")
console.log("I would like to invite ",guests[0]," to dinner")


console.log("Unfortunately, ",guests[1], "can't make it to Dinner!!")
console.log("Intital Guests list: ", guests)

let indextoremove : number = 1
guests.splice(indextoremove, 1)
console.log("Guests list after removing Guest: ", guests)

let newguest : string = "Junaid Jamshed"
guests.splice(indextoremove,0,newguest)

console.log("Guests list after adding Guest: ",guests)

console.log("\nNew Invitations")
console.log("I would like to invite ",guests[2]," to dinner")
console.log("I would like to invite ",guests[1]," to dinner")
console.log("I would like to invite ",guests[0]," to dinner")

