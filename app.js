const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const addButton = popupBox.querySelector("button");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");

// Show & Hide Popup Form
addBox.addEventListener("click", () => {
    popupBox.classList.add("show")
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
})

// Add Note button
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("button clicked");
})