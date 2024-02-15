console.log("\nStart of Exercise 14")
let guestss : String[] = ["Muhammad Ali Jinnah", "Albert Einstein", "Eminem"]

for (let i = 0; i<guestss.length; i++){
    console.log("I would like to invite ",guestss[i]," to dinner")
}
console.log("\nStart of Exericse 15")
console.log("\nUnfortunately, ",guestss[1], "can't make it to Dinner!!")
console.log("\nIntital Guests list: ", guestss)

let indextoremov : number = 1
guestss.splice(indextoremov, 1)
console.log("\nGuests list after removing Guest: ", guestss)

let newguests : string = "Junaid Jamshed"
guestss.splice(indextoremov,0,newguests)

console.log("\nGuests list after adding Guest: ",guestss)

console.log("\nNew Invitations")
for (let i = 0; i<guestss.length; i++){
    console.log("I would like to invite ",guestss[i]," to dinner")
}

//Start of Exercise 16
console.log("\nStart of Exercise 16")
console.log("\nAttention to all, Fortunately we've found a bigger table, few more guests will be invited to the dinner")
console.log("\nGuest List Before Insertion: ", guestss)

//insert at first index
let firstindex_guest : string = "Mathew Perry"
guestss.unshift(firstindex_guest)
console.log("\nGuest List after inserting guest at first index: ",guestss)

//insert at middle index
let middleindex_guest : string = "King Arthur"
let middleindex : number = Math.floor(guestss.length/2)
guestss.splice(middleindex,0,middleindex_guest)
console.log("\nGuest List after inserting guest at middle index: ",guestss)

//insert at last index
let lastindex_guest : string = "Donald Trump"
guestss.push(lastindex_guest)
console.log("\nGuest List after inserting guest at last index: ",guestss)

console.log("\nNew Invitations")
for (let i = 0; i<guestss.length; i++){
    console.log("I would like to invite ",guestss[i]," to dinner")
}

