const progreses = document.querySelectorAll('[data-progress]')
progreses.forEach(progres => {
  const value = progres.dataset.progress
  progres.style.backgroundPosition = 100 - value + '%'
  const label = progres.querySelector('.progress__value')
  label.innerHTML = value + '%'
  if (value > 50) {
    label.style.right = `calc(${100 - value}% + 20px`
  } else {
    label.style.color = 'white'
    label.style.left = `calc(${value}% + 20px`
  }
})