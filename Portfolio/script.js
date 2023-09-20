const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

console.log(hello)

