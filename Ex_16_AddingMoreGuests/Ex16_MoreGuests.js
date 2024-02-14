var guestss = ["Muhammad Ali Jinnah", "Albert Einstein", "Eminem"];
for (var i = 0; i < guestss.length; i++) {
    console.log("I would like to invite ", guestss[i], " to dinner");
}
console.log("Unfortunately, ", guestss[1], "can't make it to Dinner!!");
console.log("Intital Guests list: ", guestss);
var indextoremov = 1;
guestss.splice(indextoremov, 1);
console.log("Guests list after removing Guest: ", guestss);
var newguests = "Junaid Jamshed";
guestss.splice(indextoremov, 0, newguests);
console.log("Guests list after adding Guest: ", guestss);
console.log("\nNew Invitations");
for (var i = 0; i < guestss.length; i++) {
    console.log("I would like to invite ", guestss[i], " to dinner");
}
//Start of Exercise 16
console.log("Attention to all, Fortunately we've found a bigger table, few more guests will be invited to the dinner");
console.log("Guest List Before Insertion: ", guestss);
//insert at first index
var firstindex_guest = "Mathew Perry";
guestss.unshift(firstindex_guest);
console.log("Guest List after inserting guest at first index: ", guestss);
//insert at middle index
var middleindex_guest = "King Arthur";
var middleindex = Math.floor(guestss.length / 2);
guestss.splice(middleindex, 0, middleindex_guest);
console.log("Guest List after inserting guest at middle index: ", guestss);
//insert at last index
var lastindex_guest = "Donald Trump";
guestss.push(lastindex_guest);
console.log("Guest List after inserting guest at last index: ", guestss);
console.log("\nNew Invitations");
for (var i = 0; i < guestss.length; i++) {
    console.log("I would like to invite ", guestss[i], " to dinner");
}
