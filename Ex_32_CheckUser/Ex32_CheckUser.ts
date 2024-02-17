let current_users: string[] = ["Ali", "Zain", "Waniya"]
let new_users: string[] = ["Ahmed", "Ali", "Huma"]

for (let newu of new_users) {
    let usernameExists = false

    for (let current of current_users) {
        if (newu.toLowerCase() === current.toLowerCase()) {
            usernameExists = true
            break
        }
    
    }
    if (usernameExists) {
        console.log("Username ",newu," cannot be used, Enter a new Username!!!.")
    } else {
        console.log("Username ",newu," is available.")
    }
}
