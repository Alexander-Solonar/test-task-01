const btnOpenSubMenu = document.querySelector('[open-sub-menu]');
const subMenu = document.querySelector('[sub-menu]');

document.addEventListener('click', showSubList);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  subMenu.classList.add('visually-hidden');
  btnOpenSubMenu.classList.remove('is-open');
});

function showSubList(event) {
  if (event.target.hasAttribute('open-sub-menu')) {
    subMenu.classList.toggle('visually-hidden');
    btnOpenSubMenu.classList.toggle('is-open');
  } else if (!subMenu.classList.contains('visually-hidden')) {
    subMenu.classList.toggle('visually-hidden');
    btnOpenSubMenu.classList.toggle('is-open');
  }
}
