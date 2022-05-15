document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const modal = document.querySelector(`[data-modal="${trigger.dataset.openModal}"]`);
    modal.classList.add('open');
  })
});
document.querySelectorAll('[data-modal]').forEach(modal => {
  modal.addEventListener('click', (e) => {
    modal.classList.remove('open');
  })
  modal.querySelector('.modal').addEventListener('click', (e) => {
    e.stopPropagation();
  })
});

