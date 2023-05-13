(() => {
  const refs = {
    openModalBtn: document.querySelector('[open-modal]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', e => {
    if (e.target.className === 'backdrop') toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
