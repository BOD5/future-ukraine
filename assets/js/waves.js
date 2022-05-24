const waves = document.querySelectorAll('[data-wave]')
console.log(' - waves:2 >', waves); // eslint-disable-line no-console
waves.forEach(wave => {
  wave.style.bottom = `${wave.dataset.wave}%`
})