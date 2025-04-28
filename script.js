function smoothScroll(targetId) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top > offset && top < offset + height) {
      sec.classList.add('show');
    }
  });
});
