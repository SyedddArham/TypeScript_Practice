export let usernames: string[] = ['admin', 'Arham', 'Zehra', 'Zain', 'Waseem']

for(let i=0;i<usernames.length;i++){
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log("Hello,",usernames[i]," thank you for logging in again.")
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
