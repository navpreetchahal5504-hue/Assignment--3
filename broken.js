// Assignment Three - Debugging Challange
// All issues have been identified and fixed with explanations below

// Selecting elements from the page
let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

// Error: The original code used the wrong ID (#themeButton)
// Fix: Updated to #themeBtn to correctly match the HTML element 
let themeBtn = document.querySelector("#themeBtn");

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button Feature 
// This feature was already working, no changes needed
// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle 
// Error: Incorrect class name "darkmode"
// Fix: Changed to "dark-mode" to match CSS
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input
messageInput.addEventListener("change", function() {
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form
welcomeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});
