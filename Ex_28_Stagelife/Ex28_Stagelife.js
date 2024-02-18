var age;
function check_age(age) {
    if (age < 2) {
        console.log("Person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("Person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("Person is a Teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("Person is a Adult");
    }
    else if (age >= 65) {
        console.log("Person is a Elder");
    }
}
check_age(age = 1);
check_age(age = 3);
check_age(age = 19);
check_age(age = 50);
check_age(age = 65);
