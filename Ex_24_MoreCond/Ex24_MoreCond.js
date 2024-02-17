// Equality and inequality with strings
console.log("Equality and inequality with strings");
var string1 = "apple";
var string2 = "orange";
console.log("Equality test: 'apple' === 'apple'? I predict True.");
console.log(string1 === "apple");
console.log("Inequality test: 'apple' === 'orange'? I predict False.");
console.log(string1 === string2);
// Tests using the lower case function
console.log("\nTests using the lower case function");
var upper = "ARHAM";
console.log("Lower case test: 'ARHAM' converted to lower case is 'arham'. I predict True.");
console.log(upper.toLowerCase() === 'arham');
console.log("Lower case test: 'ARHAM' converted to lower case is not 'Arham'. I predict false.");
console.log(upper.toLowerCase() === 'Arham');
// Numerical tests
console.log("\nNumerical tests");
var num1 = 10;
var num2 = 20;
console.log("Equality test: 10 === 10? I predict True.");
console.log(num1 === num1);
console.log("Equality test: 10 === 20? I predict False.");
console.log(num1 === num2);
console.log("Greater than test: 20 > 10? I predict True.");
console.log(num2 > num1);
console.log("Greater than test: 10 > 20? I predict False.");
console.log(num1 > num2);
console.log("Less than test: 10 < 20? I predict True.");
console.log(num1 < num2);
console.log("Less than test: 20 < 10? I predict False.");
console.log(num2 < num1);
console.log("Greater than or equal to test: 20 >= 10? I predict True.");
console.log(num2 >= num1);
console.log("Greater than or equal to test: 10 >= 20? I predict False.");
console.log(num1 >= num2);
console.log("Less than or equal to test: 10 <= 20? I predict True.");
console.log(num1 <= num2);
console.log("Less than or equal to test: 20 <= 10? I predict False.");
console.log(num2 <= num1);
// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators");
var x = 5;
var y = 10;
var z = 15;
console.log("And operator test: (x < y) && (y < z)? I predict True.");
console.log((x < y) && (y < z));
console.log("And operator test: (x > y) && (y > z)? I predict False.");
console.log((x > y) && (y > z));
console.log("Or operator test: (x > y) || (y < z)? I predict True.");
console.log((x > y) || (y < z));
console.log("Or operator test: (x < y) || (y > z)? I predict False.");
console.log((x < y) || (y > z));
// Test whether an item is in an array
console.log("\nTest whether an item is in an array");
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in fruits array? I predict True.");
console.log(fruits.indexOf("apple") !== -1);
console.log("Is 'grape' in fruits array? I predict False.");
console.log(fruits.indexOf("grape") !== -1);
// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array");
console.log("Is 'melon' not in fruits array? I predict True.");
console.log(fruits.indexOf("melon") === -1);
console.log("Is 'apple' not in fruits array? I predict False.");
console.log(fruits.indexOf("apple") === -1);
