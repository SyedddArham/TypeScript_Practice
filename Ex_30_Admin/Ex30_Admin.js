"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernames = void 0;
exports.usernames = ['admin', 'Arham', 'Zehra', 'Zain', 'Waseem'];
for (var i = 0; i < exports.usernames.length; i++) {
    if (exports.usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello,", exports.usernames[i], " thank you for logging in again.");
    }
}
//Professional Approach
/*for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello,",username," thank you for logging in again.");
    }
}*/
