// Add items to list (one by one)

const bigFiveButtons = document.getElementsByClassName("big-five-button");
const spottedAnimalsList = document.getElementById("spotted-animals-list");

for (let index = 0; index < bigFiveButtons.length; index++) {
    bigFiveButtons[index].addEventListener('click', (event) => {
        console.log(event.target.innerHTML, "is added to the list");
        const newLi = document.createElement("li");
        newLi.innerHTML = event.target.innerHTML;
        spottedAnimalsList.appendChild(newLi);
    });
};

// Remove items from list (one by one)

const removeFirstItemButton = document.getElementById("remove-first-item-button");
const animalsSpottedList = document.getElementById("spotted-animals-list").getElementsByTagName("li");

removeFirstItemButton.addEventListener("click", () => {
    if (spottedAnimalsList.firstElementChild !== null) {
        spottedAnimalsList.firstElementChild.remove();
        console.log("First item removed from list");
    };
});

// Remove all items from list (one click, all gone)

const removeAllButton = document.getElementById("remove-all-button");
const animalsSpottedUl = document.getElementById("spotted-animals-list");

removeAllButton.addEventListener("click", () => {
    while (animalsSpottedUl.hasChildNodes()) {
        animalsSpottedUl.removeChild(animalsSpottedUl.firstChild);
        console.log("All items are removed at once.");
    };
});