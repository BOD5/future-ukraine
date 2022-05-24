const diagrams = document.querySelectorAll('[data-diagram]')

diagrams.forEach((diagram) => {
  const bars = diagram.querySelectorAll('[data-count]')
  const values = []
  bars.forEach(bar => {
    values.push(parseInt(bar.dataset.count))
    bar.querySelector('span').innerHTML = bar.dataset.count
  })
  const max = values.reduce((m, val) => val > m? val: m, 0)
  const heights = values.map(val => (val / max) * 100)
  bars.forEach((bar, ind) => {
    bar.style.height = heights[ind] + '%'
  })
})