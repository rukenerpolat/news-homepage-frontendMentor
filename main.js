const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbar = document.querySelector('.navbar');

if (navbar.classList.contains('active')) {
  mobileMenuIcon.src = './assets/images/icon-menu-close.svg';
  mobileMenuIcon.alt = 'Colose menu icon';
  mobileMenuBtn.setAttribute('aria-expanded', true);
  mobileMenuBtn.setAttribute('aria-label', 'Close menu');
} else {
  mobileMenuBtn.setAttribute('aria-expanded', false);
  mobileMenuBtn.setAttribute('aria-label', 'Open menu');
  mobileMenuIcon.src = './assets/images/icon-menu.svg';
  mobileMenuIcon.alt = 'Open menu icon';
}

mobileMenuBtn.addEventListener('click', () => {
  const isMobileOpen = navbar.classList.contains('active');

  if (isMobileOpen) {
    navbar.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', false);
    mobileMenuBtn.setAttribute('aria-label', 'Open menu');
    mobileMenuIcon.src = './assets/images/icon-menu.svg';
    navbar.setAttribute('aria-hidden', true);
  } else {
    navbar.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', true);
    mobileMenuBtn.setAttribute('aria-label', 'Close menu');
    mobileMenuIcon.src = './assets/images/icon-menu-close.svg';
    navbar.setAttribute('aria-hidden', false);
  }
});
