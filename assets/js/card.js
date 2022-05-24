const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', (e) => card.classList.add('rotate'))
  card.addEventListener('mouseleave', (e) => card.classList.remove('rotate'))
})