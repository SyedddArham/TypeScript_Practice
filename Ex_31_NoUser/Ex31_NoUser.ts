let emptyusername: string[]=[]

if (emptyusername.length === 0) {
    console.log("We need to find some users!")
} else {
    for (let username of emptyusername) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log("Hello,",username," thank you for logging in again.")
        }
    }
}
