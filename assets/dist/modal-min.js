"use strict";document.querySelectorAll("[data-open-modal]").forEach(function(e){e.addEventListener("click",function(o){document.querySelector('[data-modal="'.concat(e.dataset.openModal,'"]')).classList.add("open"),document.body.style="overflow: hidden;"})}),document.querySelectorAll("[data-modal]").forEach(function(e){e.addEventListener("click",function(o){e.classList.remove("open"),document.body.style=""}),e.querySelector(".modal").addEventListener("click",function(e){e.stopPropagation()})});