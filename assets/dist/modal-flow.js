"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var flow = document.querySelector('[data-flow]');
var flowFun = {
  1: {
    check: function check(step) {
      var email = step.querySelector('[name="email"]');
      var name = step.querySelector('[name="name"]');
      var error = step.querySelector('.error');
      console.log(' - error:10 >', error); // eslint-disable-line no-console

      if (!email.checkValidity() && !name.checkValidity()) {
        error.innerHTML = 'Будь ласка заповніть поля';
        return false;
      }

      return true;
    }
  },
  2: {
    check: function check(step) {
      var chekboxes = step.querySelectorAll('input');

      var res = _toConsumableArray(chekboxes).map(function (inp) {
        return inp.checked;
      }).find(function (v) {
        return v === true;
      });

      if (!res) {
        var error = step.querySelector('.error');
        error.innerHTML = 'Оберіть кому допомогти';
        return false;
      }

      return true;
    }
  },
  3: {
    check: function check(step) {
      var sum = step.querySelector('input');
      return sum.value > 0;
    }
  },
  4: {
    check: function check() {
      return true;
    }
  }
};

var Flow = /*#__PURE__*/function () {
  function Flow(element, flow) {
    var _this = this;

    _classCallCheck(this, Flow);

    this.base = element;
    this.maxStep = element.dataset.flow;
    this.flow = flow;
    this.currentStep = 1;
    this.base.querySelector('[data-back]').addEventListener('click', function (e) {
      e.preventDefault();

      _this.prev();
    });
    this.base.querySelectorAll('[data-next]').forEach(function (nextBtn) {
      nextBtn.addEventListener('click', _this.nextBtnFun.bind(_this));
    });
  }

  _createClass(Flow, [{
    key: "nextBtnFun",
    value: function nextBtnFun(e) {
      e.preventDefault();
      var flow = this.flow,
          base = this.base,
          currentStep = this.currentStep;
      var step = base.querySelector("[data-page=\"".concat(currentStep, "\"]"));

      if (flow[currentStep].check(step)) {
        this.next();
      }
    }
  }, {
    key: "next",
    value: function next() {
      var base = this.base,
          currentStep = this.currentStep;
      base.querySelector("[data-page=\"".concat(currentStep, "\"]")).classList.remove('active');
      this.currentStep++;
      var nextStep = base.querySelector("[data-page=\"".concat(currentStep + 1, "\"]"));
      this.tick(nextStep);
    }
  }, {
    key: "prev",
    value: function prev() {
      var base = this.base,
          currentStep = this.currentStep;
      base.querySelector("[data-page=\"".concat(currentStep, "\"]")).classList.remove('active');
      this.currentStep--;
      var nextStep = base.querySelector("[data-page=\"".concat(currentStep - 1, "\"]"));
      this.tick(nextStep);
    }
  }, {
    key: "start",
    value: function start() {
      this.currentStep = 1;
      this.base.querySelector("[data-page=\"1\"]").classList.add('active');
      this.base.querySelector('[data-next="1"]').style = "";
    }
  }, {
    key: "tick",
    value: function tick(nextStep) {
      var base = this.base,
          currentStep = this.currentStep;
      console.log(' - currentStep:86 >', currentStep); // eslint-disable-line no-console

      if (!nextStep) {
        this.start();
        base.parentElement.classList.remove('open');
        document.body.style = "";
        return null;
      }

      nextStep.classList.add('active');
      base.querySelector('[data-next="1"]').style = "";
      var nextPage = nextStep.querySelector('[data-next]');

      if (nextPage) {
        base.querySelector('[data-next="1"]').style = "display: none;";
      }
    }
  }]);

  return Flow;
}();

new Flow(flow, flowFun);