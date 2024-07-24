document.addEventListener("DOMContentLoaded", () => {
  menu_icon = document.getElementById("menu_icon");
  menu = document.getElementById("menu");

  menu_icon.addEventListener("click", () => {
    menu_icon.classList.toggle("fa-bars");
    menu_icon.classList.toggle("fa-xmark");

    menu.classList.toggle("hidden");
  });

  const sliders = document.querySelectorAll(".slider");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const indicators = document.querySelectorAll(".position img");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    sliders.forEach((slider, i) => {
      if (i === index) {
        slider.classList.remove("hidden");
        slider.classList.add("block");
        indicators[i].src = "assets/images/circle-solid.svg";
      } else {
        slider.classList.remove("block");
        slider.classList.add("hidden");
        indicators[i].src = "assets/images/circle-regular.svg";
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliders.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
    playButton.classList.add("hidden");
    pauseButton.classList.remove("hidden");
  }

  function stopAutoSlide() {
    clearInterval(interval);
    playButton.classList.remove("hidden");
    pauseButton.classList.add("hidden");
  }
  startAutoSlide();
  playButton.addEventListener("click", startAutoSlide);
  pauseButton.addEventListener("click", stopAutoSlide);
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  showSlide(currentIndex);
});
