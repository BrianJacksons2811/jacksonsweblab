// graphic-script.js

document.addEventListener("DOMContentLoaded", () => {
  // Fun animated reveal for each price
  const prices = document.querySelectorAll('.price');
  prices.forEach((price, i) => {
    price.style.opacity = 0;
    price.style.transform = 'scale(0.5) rotate(-5deg)';
  });

  setTimeout(() => {
    prices.forEach((price, index) => {
      setTimeout(() => {
        price.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        price.style.opacity = 1;
        price.style.transform = 'scale(1) rotate(0deg)';
      }, index * 300);
    });
  }, 500);

  // Glow effect on hover (handled by CSS class toggle)
  const plans = document.querySelectorAll('.plan');
  plans.forEach(plan => {
    plan.addEventListener('mouseover', () => {
      plan.classList.add('glow');
    });
    plan.addEventListener('mouseout', () => {
      plan.classList.remove('glow');
    });
  });

  // Optional sparkle confetti on load
  createSparkles();

  // Smooth scroll for .scroll-link (optional)
  const links = document.querySelectorAll('.scroll-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Mini sparkles confetti animation
function createSparkles() {
  const sparkleContainer = document.createElement('div');
  sparkleContainer.classList.add('sparkle-container');
  document.body.appendChild(sparkleContainer);

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparkleContainer.appendChild(sparkle);
  }

  setTimeout(() => {
    sparkleContainer.remove();
  }, 3000);
}
