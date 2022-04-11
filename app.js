const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const addButton = popupBox.querySelector("button");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//Getting local storage notes if exist and parsing them to JS object else passing an empty array to notes
const notes = JSON.parse(localStorage.getItem("notes") || "[]")

// Show & Hide Popup Form
addBox.addEventListener("click", () => {
    popupBox.classList.add("show")
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});


// Show notes from local storage
function showNotes() {
    // Removing all previous notes before adding new
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note) => {
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${note.description}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                        </div>
                    </li>`;
    addBox.insertAdjacentHTML("afterend", liTag);
    });
}

showNotes();

// Working of Add Note button and Saving Notes to local storage
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let noteTitle = titleTag.value;
    let noteDescription = descTag.value;

    if(noteTitle || noteDescription){
        // Getting month, year, day from the current date
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        year = dateObj.getFullYear(),
        day = dateObj.getDate();

        // Creating an object of title, desc and date
        const noteInformation = {
            title: noteTitle,
            description: noteDescription,
            date: `${month} ${day}, ${year}`
        }

        // Adding new note to notes and saving it to local storage
        notes.push(noteInformation);
        localStorage.setItem('notes', JSON.stringify(notes));
        closeIcon.click();
        showNotes();
    }
})
