const showSlides = () => {
  let slideIndex = 0;

  const slides = document.getElementsByClassName("mySlides");

  const hideAllSlides = () => {
    for (const slide of slides) {
      slide.style.display = "none";
    }
  };

  const displaySlide = (index) => {
    slides[index].style.display = "block";
  };

  const incrementSlideIndex = () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  };

  const startSlideShow = () => {
    hideAllSlides();
    displaySlide(slideIndex);
    incrementSlideIndex();
    setTimeout(startSlideShow, 2000); // Change image every 2 seconds
  };

  startSlideShow();
};

showSlides();
