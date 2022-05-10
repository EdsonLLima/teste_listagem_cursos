const carousel = document.querySelectorAll(
  '[data-carousel="carousel-products"]'
);
const nextButton = document.querySelectorAll(
  '[data-carousel="carousel-button__next"]'
);
const prevButton = document.querySelectorAll(
  '[data-carousel="carousel-button__prev"]'
);

carousel.forEach((item, i) => {
  let carouselSize = item.getBoundingClientRect();
  let carouselWidth = carouselSize.width / 2;

  nextButton[i].addEventListener("click", () => {
    item.scrollLeft += carouselWidth;
  });
  prevButton[i].addEventListener("click", () => {
    item.scrollLeft -= carouselWidth;
  });
});
