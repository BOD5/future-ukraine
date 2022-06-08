"use strict";

var diagrams = document.querySelectorAll('[data-diagram]');
diagrams.forEach(function (diagram) {
  var bars = diagram.querySelectorAll('[data-count]');
  var values = [];
  bars.forEach(function (bar) {
    values.push(parseInt(bar.dataset.count));
    bar.querySelector('span').innerHTML = bar.dataset.count;
  });
  var max = values.reduce(function (m, val) {
    return val > m ? val : m;
  }, 0);
  var heights = values.map(function (val) {
    return val / max * 100;
  });
  bars.forEach(function (bar, ind) {
    bar.style.height = heights[ind] + '%';
  });
});