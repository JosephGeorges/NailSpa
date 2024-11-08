const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const gallery = document.querySelector('.gallery');

leftArrow.addEventListener('click', () => {
  gallery.scrollBy({
    left: -300, // Scroll left by the width of one image
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  gallery.scrollBy({
    left: 300, // Scroll right by the width of one image
    behavior: 'smooth'
  });
});
