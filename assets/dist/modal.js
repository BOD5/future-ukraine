"use strict";

document.querySelectorAll('[data-open-modal]').forEach(function (trigger) {
  trigger.addEventListener('click', function (e) {
    var modal = document.querySelector("[data-modal=\"".concat(trigger.dataset.openModal, "\"]"));
    modal.classList.add('open');
    document.body.style = "overflow: hidden;";
  });
});
document.querySelectorAll('[data-modal]').forEach(function (modal) {
  modal.addEventListener('click', function (e) {
    modal.classList.remove('open');
    document.body.style = "";
  });
  modal.querySelector('.modal').addEventListener('click', function (e) {
    e.stopPropagation();
  });
});