// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', (!open).toString());
  });
}

// Enhanced scroll reveal with staggered member cards
const revealEls = document.querySelectorAll('section h2');
const memberCards = document.querySelectorAll('.members .card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Apply to section headings
revealEls.forEach((el) => {
  el.style.transform = 'translateY(20px)';
  el.style.opacity = '0';
  el.style.transition = 'transform 500ms ease, opacity 500ms ease';
  observer.observe(el);
});

// Apply to member cards with staggered delays
memberCards.forEach((card, index) => {
  card.style.transform = 'translateY(30px)';
  card.style.opacity = '0';
  card.style.transition = `transform 600ms ease ${index * 100}ms, opacity 600ms ease ${index * 100}ms`;
  observer.observe(card);
});
