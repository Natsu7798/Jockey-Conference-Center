// slider

const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;
let timer;

slides.forEach((slide, index) => {
  slide.style.left = `${index * slideWidth}px`;
});

function startSlider() {
  timer = setInterval(() => {
    moveToNextSlide();
  }, 3000);
}

function moveToNextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveSlider(currentIndex, nextIndex);
  currentIndex = nextIndex;
}

function moveSlider(currentIndex, nextIndex) {
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[nextIndex];
  const offset = nextIndex * slideWidth;

  slider.style.transform = `translateX(-${offset}px)`;
  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

startSlider();

//  buat alert
function myFunction() {
  alert("Thankyou For Subscribing !");
}