
let buttonsToggle = document.querySelectorAll(".button-toggle");

buttonsToggle.forEach((buttonToggle) => {
    buttonToggle.addEventListener("click", () => {
        if(buttonToggle.classList.contains("open")) {
            buttonToggle.classList.remove("open");
        } else {
            let buttonsToggleOpen = document.querySelectorAll(".open");
            buttonsToggleOpen.forEach((buttonToggleOpen) => {
                buttonToggleOpen.classList.remove("open");
            });
            buttonToggle.classList.add("open");
        }
    });
});