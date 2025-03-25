/* ----------------------------------------- */
/* SCROLLING BAR --------------------------- */
/* ----------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-container");
    const dayImage = document.querySelector(".background-image.day");
    const nightImage = document.querySelector(".background-image.night");
    const body = document.body;

    // Get initial state from localStorage
    let isActive = localStorage.getItem("darkMode") === "true";

    // Apply initial state
    if (isActive) {
        toggleButton.classList.add("active");
        dayImage.classList.add("inactive");
        nightImage.classList.remove("inactive");
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        isActive = !isActive;
        localStorage.setItem("darkMode", isActive);

        toggleButton.classList.toggle("active");

        if (isActive) {
            dayImage.classList.add("inactive");
            nightImage.classList.remove("inactive");
            body.classList.add("dark-mode");
        } else {
            dayImage.classList.remove("inactive");
            nightImage.classList.add("inactive");
            body.classList.remove("dark-mode");
        }
    });
});
