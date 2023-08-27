document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const paginationDots = document.querySelectorAll('.pagination-dot');
  
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    function updatePagination(index) {
      paginationDots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active-dot');
          dot.style.backgroundColor = 'red';
        } else {
          dot.classList.remove('active-dot');
          dot.style.backgroundColor = '#bbb';
        }
      });
    }
  
    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      updatePagination(currentSlide);
    });
  
    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      updatePagination(currentSlide);
    });
  
    paginationDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
        updatePagination(currentSlide);
      });
    });
  
    showSlide(currentSlide);
    updatePagination(currentSlide);
  });
  