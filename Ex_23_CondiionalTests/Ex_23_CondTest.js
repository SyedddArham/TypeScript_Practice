var car = 'subaru';
//Test1
console.log("Test#1: Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//Test2
console.log("\nTest#2: Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
//Test3
console.log("\nTest#3: Is car string length > 0? I predict True.");
console.log(car.length > 0);
//Test4
console.log("\nTest#4: Is car string length < 5? I predict False.");
console.log(car.length < 5);
//Test5
console.log("\nTest#5: Is car char at (2) === 'b'? I predict True.");
console.log(car.charAt(2) === 'b');
//Test6
console.log("\nTest#6: Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
//Test7
console.log("\nTest#7: Is car string in lowercase === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');
//Test8
console.log("\nTest#8: Is car string in Uppercase === 'subaru'? I predict False.");
console.log(car.toUpperCase() === 'subaru');
//Test9
console.log("\nTest#9: Does car contain the substring 'sub'? I predict True.");
console.log(car.substring(0, 3) === 'sub');
//Test10
console.log("\nTest#10: Does car contain the substring 'toy'? I predict False.");
console.log(car.substring(0, 3) === 'toy');
