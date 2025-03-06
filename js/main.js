const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-items');
const hamburger = document.querySelector('.hamburger-lines'); // Get the hamburger icon

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    menu.classList.add('expanded');
    hamburger.classList.add('fixed'); // Keep the hamburger icon inside the menu
  } else {
    menu.classList.remove('expanded');
    hamburger.classList.remove('fixed'); // Reset position when closing
  }
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !hamburger.contains(event.target) && event.target !== menuToggle) {
    menuToggle.checked = false;
    menu.classList.remove('expanded');
    hamburger.classList.remove('fixed');
  }
});