
  // ******** word carousel ******** //

  document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;
  
    function fadeInWord(index) {
      words[index].classList.remove('hidden');
      words[index].classList.add('visible');
    }
  
    function fadeOutWord(index) {
      words[index].classList.remove('visible');
      words[index].classList.add('hidden');
    }
  
    function rotateWords() {
      fadeOutWord(currentIndex);
      currentIndex = (currentIndex + 1) % words.length;
      fadeInWord(currentIndex);
    }
  
    // Initial display
    fadeInWord(currentIndex);
  
    setInterval(rotateWords, 3000); // Change word every 3 seconds
  });
  
  
  
  
  

  



















