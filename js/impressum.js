// ****** Hamburger Menu ****** // 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



// ****** activate navbar on scroll ****** //

function navbarVisibility() {
    const scrollPosition = window.scrollY;
    const windowSize = window.innerWidth;

    if (windowSize < 800) {
      navbar.classList.add('show');
    } else {
      if (windowSize < 1650) {
        if (scrollPosition >= 60) {
          navbar.classList.add('show');
        } else {
          navbar.classList.remove('show');
        }
      } else {
        if (scrollPosition >= 120) {
          navbar.classList.add('show');
        } else {
          navbar.classList.remove('show');
        }
      }
    }
  }
  // Add a scroll event listener to the window
  window.addEventListener('scroll', navbarVisibility);
  // Call the function on page load to set the initial visibility
  navbarVisibility();