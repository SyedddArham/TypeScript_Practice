let magiciansArray : string[] = ["Harry Adams","John Andrew", "Henry Specter"]

function show_magicianss(magicians:string[]){
    console.log(magicians)
    }
function make_greats(magicians: string[]): string[] {
    let copyOfMagicians = magicians.slice();

    for (let i = 0; i < copyOfMagicians.length; i++) {
        copyOfMagicians[i] = "The Great "+ copyOfMagicians[i];
    }

    return copyOfMagicians;
}

console.log("Original Magician Array: ")
show_magicianss(magiciansArray);
console.log("\nMaking copy of the Magican array list.....(Adding The Great)(Orignal Array Unchanged")
let greatMagiciansArray = make_greats(magiciansArray);
console.log("\nNew Array of Great Magicians (Original array unchanged):");
show_magicianss(greatMagiciansArray);
console.log("\nOriginal Magician Array: ")
show_magicianss(magiciansArray);
