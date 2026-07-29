const sections = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-links a');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  const top = window.scrollY + window.innerHeight * 0.85;

  sections.forEach((section) => {
    if (top >= section.offsetTop) {
      section.classList.add('visible');
    }
  });

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

window.addEventListener('load', () => {
  sections.forEach((section) => section.classList.add('visible'));
});