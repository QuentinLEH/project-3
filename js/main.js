/* ----------------------------------------- */
/* DAY/NIGHT BACKGROUND -------------------- */
/* ----------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments du DOM
    const toggleButton = document.getElementById("toggle-container");
    const dayContainer = document.querySelector(".day-container");
    const nightContainer = document.querySelector(".night-container");
    const body = document.body;

    // Récupération de l'état initial du mode sombre depuis le localStorage
    let isActive = localStorage.getItem("darkMode") === "true";

    // Application de l'état initial
    if (isActive) {
        toggleButton.classList.add("active"); // Ajoute la classe active au bouton
        dayContainer.classList.add("inactive"); // Rend le conteneur jour inactif
        nightContainer.classList.remove("inactive"); // Rend le conteneur nuit actif
        body.classList.add("dark-mode"); // Ajoute la classe dark-mode au body
    }

    // Ajout d'un écouteur d'événement pour le clic sur le bouton
    toggleButton.addEventListener("click", function () {
        isActive = !isActive; // Inverse l'état actif
        localStorage.setItem("darkMode", isActive); // Met à jour le localStorage

        toggleButton.classList.toggle("active"); // Bascule la classe active sur le bouton

        if (isActive) {
            dayContainer.classList.add("inactive"); // Rend le conteneur jour inactif
            nightContainer.classList.remove("inactive"); // Rend le conteneur nuit actif
            body.classList.add("dark-mode"); // Ajoute la classe dark-mode au body
        } else {
            dayContainer.classList.remove("inactive"); // Rend le conteneur jour actif
            nightContainer.classList.add("inactive"); // Rend le conteneur nuit inactif
            body.classList.remove("dark-mode"); // Retire la classe dark-mode du body
        }
    });
});


/* ----------------------------------------- */
/* RESPONSIVE CLICKABLE-POINT -------------- */
/* ----------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const backgroundImage = document.querySelector(".background-image:not(.inactive)");
    const imageWrapper = document.querySelector(".image-wrapper");
    const clickablePoints = document.querySelectorAll(".clickable-point");

    function positionClickablePoints() {
        if (!backgroundImage.complete) {
            console.error("Image not fully loaded.");
            return;
        }

        const imgRect = backgroundImage.getBoundingClientRect();
        const wrapperRect = imageWrapper.getBoundingClientRect();

        const imgAspectRatio = backgroundImage.naturalWidth / backgroundImage.naturalHeight;
        const wrapperAspectRatio = wrapperRect.width / wrapperRect.height;

        let displayedImageWidth, displayedImageHeight;

        if (imgAspectRatio > wrapperAspectRatio) {
            displayedImageWidth = wrapperRect.height * imgAspectRatio;
            displayedImageHeight = wrapperRect.height;
        } else {
            displayedImageWidth = wrapperRect.width;
            displayedImageHeight = wrapperRect.width / imgAspectRatio;
        }

        const offsetX = Math.max(0, (wrapperRect.width - displayedImageWidth) / 2);
        const offsetY = Math.max(0, (wrapperRect.height - displayedImageHeight) / 2);

        clickablePoints.forEach((point) => {
            const xPercent = parseFloat(getComputedStyle(point).getPropertyValue('--data-x'));
            const yPercent = parseFloat(getComputedStyle(point).getPropertyValue('--data-y'));

            if (isNaN(xPercent) || isNaN(yPercent)) {
                console.error("Invalid percentage values for", point);
                return;
            }

            const xPos = offsetX + (displayedImageWidth * xPercent) / 100;
            const yPos = offsetY + (displayedImageHeight * yPercent) / 100;

            console.log(`Positioning point at x: ${xPos}, y: ${yPos}`);

            point.style.left = `${xPos}px`;
            point.style.top = `${yPos}px`;
        });
    }

    // Position initialement lorsque l'image est chargée
    if (backgroundImage.complete) {
        positionClickablePoints();
    } else {
        backgroundImage.addEventListener("load", positionClickablePoints);
    }

    // Repositionner lors du redimensionnement de la fenêtre
    window.addEventListener("resize", positionClickablePoints);
});


/* ----------------------------------------- */
/* ----------------------------------------- */

