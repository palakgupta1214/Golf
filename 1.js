// Function to slide the containers
function slideNext() {
    const slider = document.querySelector('.slider');
    const firstSlide = document.querySelector('.slide:first-child');
    slider.appendChild(firstSlide);
    slider.style.transform = 'translateX(-300px)'; // Adjust the slide width accordingly
  }
  
  // Set an interval to auto-slide every 3 seconds
  setInterval(slideNext, 3000);
  