"use strict";var diagrams=document.querySelectorAll("[data-diagram]");diagrams.forEach(function(t){var a=t.querySelectorAll("[data-count]"),r=[];a.forEach(function(t){r.push(parseInt(t.dataset.count)),t.querySelector("span").innerHTML=t.dataset.count});var e=r.reduce(function(t,a){return a>t?a:t},0),n=r.map(function(t){return t/e*100});a.forEach(function(t,a){t.style.height=n[a]+"%"})});