const carousel = document.querySelectorAll(
  '[data-carousel="carousel-products"]'
);
const nextButton = document.querySelector(
  '[data-carousel="carousel-button__next"]'
);
const prevButton = document.querySelector(
  '[data-carousel="carousel-button__prev"]'
);

let currentCarousel = 0;

nextButton.addEventListener("click", (currentCarousel) => {
  carousel.forEach((slide) => {
    currentCarousel++;
    let carouselSize = slide.getBoundingClientRect();
    let carouselWidth = carouselSize.width;
    slide.scrollLeft += carouselWidth;
  });
  slide[currentCarousel];
});

// carousel.forEach((item, i) => {
//   let carouselSize = item.getBoundingClientRect();
//   let carouselWidth = carouselSize.width;
//   currentCarousel[i];
//   nextButton.addEventListener("click", () => {
//     item.scrollLeft += carouselWidth;
//   });
// });
