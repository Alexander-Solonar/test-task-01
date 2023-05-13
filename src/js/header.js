const menuBtn = document.querySelector('[open-sub-menu]');
const menu = document.querySelector('[sub-menu]');

(() => {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visually-hidden');
    menuBtn.classList.toggle('is-open');
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    menu.classList.add('visually-hidden');
    menuBtn.classList.remove('is-open');
  });
})();
