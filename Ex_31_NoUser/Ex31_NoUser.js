"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emptyusername = [];
if (emptyusername.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, emptyusername_1 = emptyusername; _i < emptyusername_1.length; _i++) {
        var username = emptyusername_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello,", username, " thank you for logging in again.");
        }
    }
}
