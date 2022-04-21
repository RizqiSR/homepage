// Promp user's name
let user = prompt("What's your name?")

// Check if user's prompt NULL or not
if (user == null || user =="") {
    text = "Hello, there!"
} else {
    text = (`Hello, ${user}!`)
}
alert(text)