// ecommerce.js

document.addEventListener("DOMContentLoaded", () => {
  const plans = document.querySelectorAll('.plan');
  const backLink = document.querySelector('.back-link');

  // 1. Animate plans on load
  plans.forEach((plan, index) => {
    plan.style.opacity = 0;
    plan.style.transform = "translateY(50px)";
    setTimeout(() => {
      plan.style.transition = "all 0.8s ease";
      plan.style.opacity = 1;
      plan.style.transform = "translateY(0)";
    }, index * 300);
  });

  // 2. Add hover bounce effect to buttons
  const buttons = document.querySelectorAll('.plan .btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('btn-bounce');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('btn-bounce');
    });
  });

  // 3. Scroll fade-in for plans
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.3 });

  plans.forEach(plan => {
    plan.classList.add('fade-in');
    observer.observe(plan);
  });

  // 4. Back-link hover effect
  if (backLink) {
    backLink.addEventListener("mouseenter", () => {
      backLink.style.transform = "translateX(-5px)";
    });
    backLink.addEventListener("mouseleave", () => {
      backLink.style.transform = "translateX(0)";
    });
  }
});

// Modal logic
const modal = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const openButtons = document.querySelectorAll('.open-modal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');

const planDetails = {
  starter: {
    title: "Starter Store",
    desc: "Perfect for getting started online. Sell up to 7 products and launch in under 3 weeks with full mobile responsiveness."
  },
  standard: {
    title: "Standard Store",
    desc: "Best for small businesses. Get WooCommerce or Snipcart integration, blogs, SEO setup and more!"
  },
  premium: {
    title: "Premium Store",
    desc: "Ideal for serious sellers. Manage unlimited products, get custom features, and full training + 30-day support."
  }
};

openButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const plan = btn.getAttribute('data-plan');
    modalTitle.textContent = planDetails[plan].title;
    modalDetails.textContent = planDetails[plan].desc;
    modal.style.display = "flex";
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
