document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slider');
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const indicators = document.querySelectorAll('.position img');
  let currentIndex = 0;
  let interval;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, i) => {
      indicator.src = i === currentIndex ? 'assets/images/circle-solid.svg' : 'assets/images/circle-regular.svg';
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
  }

  function stopAutoSlide() {
    clearInterval(interval);
    playButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
  }

  startAutoSlide();

  playButton.addEventListener('click', startAutoSlide);
  pauseButton.addEventListener('click', stopAutoSlide);
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  updateCarousel();
});
