console.log("\nStart of Exercise 14");
var guestsss = ["Muhammad Ali Jinnah", "Albert Einstein", "Eminem"];
for (var i = 0; i < guestsss.length; i++) {
    console.log("I would like to invite ", guestsss[i], " to dinner");
}
console.log("\nStart of Exercise 15");
console.log("\nUnfortunately, ", guestsss[1], "can't make it to Dinner!!");
console.log("\nIntital Guests list: ", guestsss);
var indextoremovee = 1;
guestsss.splice(indextoremovee, 1);
console.log("\nGuests list after removing Guest: ", guestsss);
var newguestss = "Junaid Jamshed";
guestsss.splice(indextoremovee, 0, newguestss);
console.log("\nGuests list after adding Guest: ", guestsss);
console.log("\nNew Invitations");
for (var i = 0; i < guestsss.length; i++) {
    console.log("I would like to invite ", guestsss[i], " to dinner");
}
//Start of Exercise 16
console.log("\nStart of Exercise 16");
console.log("\nAttention to all, Fortunately we've found a bigger table, few more guests will be invited to the dinner");
console.log("\nGuest List Before Insertion: ", guestsss);
//insert at first index
var firstindex_guests = "Mathew Perry";
guestsss.unshift(firstindex_guests);
console.log("\nGuest List after inserting guest at first index: ", guestsss);
//insert at middle index
var middleindex_guests = "King Arthur";
var middleindexx = Math.floor(guestsss.length / 2);
guestsss.splice(middleindexx, 0, middleindex_guests);
console.log("\nGuest List after inserting guest at middle index: ", guestsss);
//insert at last index
var lastindex_guests = "Donald Trump";
guestsss.push(lastindex_guests);
console.log("\nGuest List after inserting guest at last index: ", guestsss);
console.log("\n\nNew Invitations");
for (var i = 0; i < guestsss.length; i++) {
    console.log("I would like to invite ", guestsss[i], " to dinner");
}
//Start of Ex17
console.log("\n Start of Exericse 17");
console.log("\nUnfortunately due some management issues, we can only invite 2 people to dinner\n");
while (guestsss.length > 2) {
    var removedguest = guestsss.pop();
    console.log("Sorry, ", removedguest, " cant invite you to dinner!");
}
console.log("\nNew guest list");
for (var i = 0; i < guestsss.length; i++) {
    console.log(guestsss[i], "You are still invited to dinner");
}
//arrived at dinner
guestsss.splice(0);
console.log("\nEmpty Guest list: ", guestsss);
