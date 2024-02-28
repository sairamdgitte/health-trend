document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");
    
    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll(".slide");
      let currentSlide = 0;
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        currentSlide = index;
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
  
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
  
      carousel.addEventListener("click", event => {
        const target = event.target;
        if (target.classList.contains("prev")) {
          prevSlide();
        } else if (target.classList.contains("next")) {
          nextSlide();
        }
      });
  
      showSlide(currentSlide);
    });
  });
  