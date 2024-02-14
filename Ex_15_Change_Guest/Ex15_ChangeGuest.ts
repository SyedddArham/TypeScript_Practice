let guests : String[] = ["Muhammad Ali Jinnah", "Albert Einstein", "Eminem"]

for (let i = 0; i<guests.length; i++){
    console.log("I would like to invite ",guests[i]," to dinner")
}

//Start of Ex 15


console.log("Unfortunately, ",guests[1], "can't make it to Dinner!!")
console.log("Intital Guests list: ", guests)

let indextoremove : number = 1
guests.splice(indextoremove, 1)
console.log("Guests list after removing Guest: ", guests)

let newguest : string = "Junaid Jamshed"
guests.splice(indextoremove,0,newguest)

console.log("Guests list after adding Guest: ",guests)

console.log("\nNew Invitations")
for (let i = 0; i<guests.length; i++){
    console.log("I would like to invite ",guests[i]," to dinner")
}



