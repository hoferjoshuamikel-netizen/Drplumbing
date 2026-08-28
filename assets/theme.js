document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      mobileMenu.hidden = open;
      document.body.classList.toggle('menu-open', !open);
    });
  }

  document.querySelectorAll('[data-quantity]').forEach((control) => {
    const input = control.querySelector('input[type="number"]');
    control.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        const change = button.dataset.quantityAction === 'increase' ? 1 : -1;
        const minimum = Number(input.min || 1);
        input.value = Math.max(minimum, Number(input.value || minimum) + change);
      });
    });
  });
});
