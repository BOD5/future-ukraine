"use strict";

var waves = document.querySelectorAll('[data-wave]');
console.log(' - waves:2 >', waves); // eslint-disable-line no-console

waves.forEach(function (wave) {
  wave.style.bottom = "".concat(wave.dataset.wave, "%");
});