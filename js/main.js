/* ----------------------------------------- */
/* SCROLLING BAR --------------------------- */
/* ----------------------------------------- */



document.addEventListener("DOMContentLoaded", function () {
  const toggleContainer = document.getElementById("toggle-container");
  const toggleButton = document.getElementById("toggle-button");
  const dayImage = document.querySelector(".day .background-image");
  const nightImage = document.querySelector(".night .background-image");
  let isNightMode = false;

  toggleContainer.addEventListener("click", function () {
      isNightMode = !isNightMode;
      
      if (isNightMode) {
          nightImage.classList.remove("inactive");
          dayImage.classList.add("inactive");
          toggleContainer.style.backgroundColor = "#333";
          toggleButton.style.transform = "translateX(32px)";
          toggleButton.style.backgroundColor = "#fff";
      } else {
          dayImage.classList.remove("inactive");
          nightImage.classList.add("inactive");
          toggleContainer.style.backgroundColor = "#b4b4b4";
          toggleButton.style.transform = "translateX(0)";
          toggleButton.style.backgroundColor = "#fff";
      }
  });
});
