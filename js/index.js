
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



  // ****** Function to flip box when clicking on icon (flip box) ****** //

function flip(icon) {
    const frontFace = icon.closest('.front-face');
    const backFace = icon.closest('.back-face');
    
    if (frontFace) {
      const card = frontFace.parentElement;
      card.classList.toggle('flip');
    } else if (backFace) {
      const card = backFace.parentElement;
      card.classList.toggle('flip');
    }
  } 
  // Add event listeners to all (icon) elements (flip box) //
  const icons = document.querySelectorAll('.icon i, .icon_back i');
  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      flip(icon);
    });
  });



  // ******** slide show - (animated images using js) ******** //
  
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  if (slides.length === 0) {
    return; // No slides found, exit the function
  }

  // Check if slideIndex is greater than or equal to slides.length
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";

  slideIndex++;

  // Change slide every 4 seconds
  setTimeout(showSlides, 4000);
}



  // ------------------- modal open/close script ------------------- //


const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalSlides = document.querySelectorAll('.modal-slide');
const modalPrevButton = document.getElementById('modal-prev');
const modalNextButton = document.getElementById('modal-next');
const modalCloseButton = document.getElementById('modal-close');
let currentModalSlide = 0;

function showModal() {
  modal.style.display = 'block';
  showModalSlide(currentModalSlide);
}

function hideModal() {
  modal.style.display = 'none';
}

function showModalSlide(slideIndex) {
  modalSlides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

modalPrevButton.addEventListener('click', () => {
  currentModalSlide = (currentModalSlide - 1 + modalSlides.length) % modalSlides.length;
  showModalSlide(currentModalSlide);
});

modalNextButton.addEventListener('click', () => {
  currentModalSlide = (currentModalSlide + 1) % modalSlides.length;
  showModalSlide(currentModalSlide);
});

modalCloseButton.addEventListener('click', hideModal);

// Open the modal on button click
document.querySelector('.open-modal').addEventListener('click', showModal);