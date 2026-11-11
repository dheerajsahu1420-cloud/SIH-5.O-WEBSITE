document.addEventListener('DOMContentLoaded', () => {
  const slides = [...document.querySelectorAll('.slide')];
  if (!slides.length) return;
  let current = Math.max(0, slides.findIndex(slide => slide.classList.contains('active')));
  const show = index => {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  };
  document.querySelector('.prev-btn')?.addEventListener('click', () => show(current - 1));
  document.querySelector('.next-btn')?.addEventListener('click', () => show(current + 1));
});
