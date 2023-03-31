const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else {
        nav.removeAttribute("style");
    }
}


// JavaScript for slider Carousel 

const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = sliderWrapper.clientWidth;
let currentSlide = 0;

// Go to the next slide
function nextSlide() {
  if (currentSlide === sliderWrapper.childElementCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Go to the previous slide
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = sliderWrapper.childElementCount - 1;
  } else {
    currentSlide--;
  }
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Add event listeners to the navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Stop the slider when the mouse hovers over it
sliderWrapper.addEventListener('mouseover', () => {
  clearInterval(slideInterval);
});

// Start the slider again when the mouse leaves the slider
sliderWrapper.addEventListener('mouseout', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Start the slider automatically
let slideInterval = setInterval(nextSlide, 5000);
