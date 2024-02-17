var current_users = ["Ali", "Zain", "Waniya"];
var new_users = ["Ahmed", "Ali", "Huma"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newu = new_users_1[_i];
    var usernameExists = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current = current_users_1[_a];
        if (newu.toLowerCase() === current.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Username ", newu, " cannot be used, Enter a new Username!!!.");
    }
    else {
        console.log("Username ", newu, " is available.");
    }
}
