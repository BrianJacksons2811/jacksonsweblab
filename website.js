// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Animate price reveal
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    price.style.opacity = 0;
    price.style.transform = 'translateY(20px)';
  });

  // Delay animation
  setTimeout(() => {
    prices.forEach((price, index) => {
      setTimeout(() => {
        price.style.transition = 'all 0.6s ease';
        price.style.opacity = 1;
        price.style.transform = 'translateY(0)';
      }, index * 300);
    });
  }, 500);

  // Optional: Smooth scroll to sections
  const navLinks = document.querySelectorAll('.scroll-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
