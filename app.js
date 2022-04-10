const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = document.querySelector("header i");

// console.log(addBox);
addBox.addEventListener("click", () => {
    popupBox.classList.add("show")
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
})