"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var flow=document.querySelector("[data-flow]"),flowFun={1:{check:function(e){var t=e.querySelector('[name="email"]'),r=e.querySelector('[name="name"]'),a=e.querySelector(".error");return console.log(" - error:10 >",a),!(!t.checkValidity()&&!r.checkValidity())||(a.innerHTML="Будь ласка заповніть поля",!1)}},2:{check:function(e){return!!_toConsumableArray(e.querySelectorAll("input")).map(function(e){return e.checked}).find(function(e){return!0===e})||(e.querySelector(".error").innerHTML="Оберіть кому допомогти",!1)}},3:{check:function(e){return e.querySelector("input").value>0}},4:{check:function(){return!0}}},Flow=function(){function e(t,r){var a=this;_classCallCheck(this,e),this.base=t,this.maxStep=t.dataset.flow,this.flow=r,this.currentStep=1,this.base.querySelector("[data-back]").addEventListener("click",function(e){e.preventDefault(),a.prev()}),this.base.querySelectorAll("[data-next]").forEach(function(e){e.addEventListener("click",a.nextBtnFun.bind(a))})}return _createClass(e,[{key:"nextBtnFun",value:function(e){e.preventDefault();var t=this.flow,r=this.base,a=this.currentStep,n=r.querySelector('[data-page="'.concat(a,'"]'));t[a].check(n)&&this.next()}},{key:"next",value:function(){var e=this.base,t=this.currentStep;e.querySelector('[data-page="'.concat(t,'"]')).classList.remove("active"),this.currentStep++;var r=e.querySelector('[data-page="'.concat(t+1,'"]'));this.tick(r)}},{key:"prev",value:function(){var e=this.base,t=this.currentStep;e.querySelector('[data-page="'.concat(t,'"]')).classList.remove("active"),this.currentStep--;var r=e.querySelector('[data-page="'.concat(t-1,'"]'));this.tick(r)}},{key:"start",value:function(){this.currentStep=1,this.base.querySelector('[data-page="1"]').classList.add("active"),this.base.querySelector('[data-next="1"]').style=""}},{key:"tick",value:function(e){var t=this.base,r=this.currentStep;if(console.log(" - currentStep:86 >",r),!e)return this.start(),t.parentElement.classList.remove("open"),document.body.style="",null;e.classList.add("active"),t.querySelector('[data-next="1"]').style="",e.querySelector("[data-next]")&&(t.querySelector('[data-next="1"]').style="display: none;")}}]),e}();new Flow(flow,flowFun);