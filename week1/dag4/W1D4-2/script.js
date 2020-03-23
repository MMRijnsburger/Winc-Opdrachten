const mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", function () {
    alert("button clicked");
})

const backgroundButton = document.getElementById("backgroundButton");
backgroundButton.addEventListener("click", function () {

    if (backgroundButton.className == "blue-background") {
        //change the colour to red
        backgroundButton.className = "red-background";
    } else {
        //change the colour to blue
        backgroundButton.className = "blue-background";
    }
})