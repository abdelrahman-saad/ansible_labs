// JavaScript to add interactivity
document.addEventListener("DOMContentLoaded", function () {
    // Get the element by its ID
    const helloText = document.getElementById("hello-text");

    // Change the text when the element is clicked
    helloText.addEventListener("click", function () {
        helloText.textContent = "Hello, Abdelrahman!";
    });
});
