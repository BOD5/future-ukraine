"use strict";

var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
  card.addEventListener('click', function (e) {
    return card.classList.add('rotate');
  });
  card.addEventListener('mouseleave', function (e) {
    return card.classList.remove('rotate');
  });
});