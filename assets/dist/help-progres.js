"use strict";

var progreses = document.querySelectorAll('[data-progress]');
progreses.forEach(function (progres) {
  var value = progres.dataset.progress;
  progres.style.backgroundPosition = 100 - value + '%';
  var label = progres.querySelector('.progress__value');
  label.innerHTML = value + '%';

  if (value > 50) {
    label.style.right = "calc(".concat(100 - value, "% + 20px");
  } else {
    label.style.color = 'white';
    label.style.left = "calc(".concat(value, "% + 20px");
  }
});