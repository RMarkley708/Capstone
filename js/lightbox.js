
// ************** lightbox ************** //

// Get references to buttons and images
const homeButton = document.getElementById('homeButton');
const featuresButton = document.getElementById('featuresButton');
const impressumButton = document.getElementById('impressumButton');
const desktopButton = document.getElementById('desktopButton');
const tabletButton = document.getElementById('tabletButton');
const mobileButton = document.getElementById('mobileButton');

const desktopImages = [
  document.getElementById('homeDesktop'),
  document.getElementById('featuresDesktop'),
  document.getElementById('impressumDesktop')
];

const tabletImages = [
  document.getElementById('homeTablet'),
  document.getElementById('featuresTablet'),
  document.getElementById('impressumTablet')
];

const mobileImages = [
  document.getElementById('homeMobile'),
  document.getElementById('featuresMobile'),
  document.getElementById('impressumMobile')
];

const homeImages = [
  document.getElementById('homeDesktop'),
  document.getElementById('homeTablet'),
  document.getElementById('homeMobile')
];

const featuresImages = [
  document.getElementById('featuresDesktop'),
  document.getElementById('featuresTablet'),
  document.getElementById('featuresMobile')
];

const impressumImages = [
  document.getElementById('impressumDesktop'),
  document.getElementById('impressumTablet'),
  document.getElementById('impressumMobile')
];

// Function to hide all images
function hideAllImages(imagesToHide) {
  imagesToHide.forEach(image => {
    image.style.display = 'none';
  });
}

// Function to update the image display based on selected buttons
function updateImageDisplay() {
  let selectedImages = [];
  let hiddenImages1 = [];
  let hiddenImages2 = [];

 // Check which category button is selected
 if (desktopButton.classList.contains('selected')) {
  selectedImages = desktopImages;
  hideAllImages(tabletImages.concat(mobileImages));
} else if (tabletButton.classList.contains('selected')) {
  selectedImages = tabletImages;
  hideAllImages(desktopImages.concat(mobileImages));
} else if (mobileButton.classList.contains('selected')) {
  selectedImages = mobileImages;
  hideAllImages(desktopImages.concat(tabletImages));
}

  // Check which section button is selected
  if (homeButton.classList.contains('selected')) {
    hiddenImages1 = featuresImages.concat(impressumImages);
  } else if (featuresButton.classList.contains('selected')) {
    hiddenImages1 = homeImages.concat(impressumImages);
  } else if (impressumButton.classList.contains('selected')) {
    hiddenImages1 = homeImages.concat(featuresImages);
  }

   // Hide all images
   desktopImages.concat(tabletImages, mobileImages).forEach(image => {
    image.style.display = 'none';
  });
  
  // Display selected images and hide others
  selectedImages.forEach(image => {
    image.style.display = 'block';
  });
  hiddenImages1.concat(hiddenImages2).forEach(image => {
    image.style.display = 'none';
  });
}

// Add event listeners to buttons
  homeButton.addEventListener('click', () => {
  homeButton.classList.toggle('selected');
  featuresButton.classList.remove('selected');
  impressumButton.classList.remove('selected');
  updateImageDisplay();
});

featuresButton.addEventListener('click', () => {
  featuresButton.classList.toggle('selected');
  homeButton.classList.remove('selected');
  impressumButton.classList.remove('selected');
  updateImageDisplay();
});

impressumButton.addEventListener('click', () => {
  impressumButton.classList.toggle('selected');
  homeButton.classList.remove('selected');
  featuresButton.classList.remove('selected');
  updateImageDisplay();
});

desktopButton.addEventListener('click', () => {
  desktopButton.classList.toggle('selected');
  tabletButton.classList.remove('selected');
  mobileButton.classList.remove('selected');
  updateImageDisplay();
});

tabletButton.addEventListener('click', () => {
  tabletButton.classList.toggle('selected');
  desktopButton.classList.remove('selected');
  mobileButton.classList.remove('selected');
  updateImageDisplay();
});

mobileButton.addEventListener('click', () => {
  mobileButton.classList.toggle('selected');
  desktopButton.classList.remove('selected');
  tabletButton.classList.remove('selected');
  updateImageDisplay();
});

// Show desktopImages by default when the lightbox opens
updateImageDisplay();


// lightbox  open/close script
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close');
const sections = document.querySelectorAll('.section');

// Open the lightbox
function openLightbox() {
  var lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";
}

// Close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}
closeButton.addEventListener('click', closeLightbox);

// Add event listeners to your trigger elements (open with (+) icon)
var triggerElements = document.querySelectorAll(".lightbox-trigger");
triggerElements.forEach(function(element) {
  element.addEventListener("click", openLightbox);
});

// Add event listener to open button (open with (+) icon)
triggerElements.forEach(function(element) {
  element.addEventListener("click", openLightbox);
});

// Close the lightbox when clicking outside of the content
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});