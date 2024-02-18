function make_shirt(size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I love TypeScript"; }
    console.log("The size of the Tshirt is: ", size, " , The message on the Tshirt is: ", msg);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love C++");
