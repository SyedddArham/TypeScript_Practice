var magicians = ["Harry Adams", "John Andrew", "Henry Specter"];
function great_magican(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    console.log(magicians);
}
console.log("Original Magician Array: ");
show_magicians(magicians);
console.log("\nModifying the Magican array list.....(Adding The Great)");
great_magican(magicians);
console.log("\nModified Magician Array: ");
show_magicians(magicians);
