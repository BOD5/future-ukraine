
const flow = document.querySelector('[data-flow]');

const flowFun = {
  1: {
    check (step) {
      const email = step.querySelector('[name="email"]');
      const name = step.querySelector('[name="name"]');
      const error = step.querySelector('.error');
      console.log(' - error:10 >', error); // eslint-disable-line no-console
      if (!email.checkValidity() && !name.checkValidity()) {
        error.innerHTML = 'Будь ласка заповніть поля'
        return false
      }
      return true
    }
  },
  2: {
    check (step) {
      const chekboxes = step.querySelectorAll('input');
      const res = [...chekboxes].map(inp => inp.checked).find(v => v === true);
      if (!res) {
        const error = step.querySelector('.error');
        error.innerHTML = 'Оберіть кому допомогти';
        return false;
      }
      return true;
    }
  },
  3: {
    check (step) {
      const sum = step.querySelector('input');
      return sum.value > 0;
    }
  },
  4: {
    check: () => true,
  }
}

class Flow {
  constructor(element, flow) {
    this.base = element;
    this.maxStep = element.dataset.flow;
    this.flow = flow;
    this.currentStep = 1;
    this.base.querySelector('[data-back]').addEventListener('click', (e) => {
      e.preventDefault();
      this.prev();
    })
    this.base.querySelectorAll('[data-next]').forEach((nextBtn) => {
      nextBtn.addEventListener('click', this.nextBtnFun.bind(this));
    });
  }

  nextBtnFun(e) {
    e.preventDefault();
    const { flow, base, currentStep } = this;
    const step = base.querySelector(`[data-page="${currentStep}"]`)
    if(flow[currentStep].check(step)) {
      this.next();
    }
  }

  next() {
    const { base, currentStep } = this;
    base.querySelector(`[data-page="${currentStep}"]`).classList.remove('active');
    this.currentStep++;
    const nextStep = base.querySelector(`[data-page="${currentStep + 1}"]`);
    this.tick(nextStep);
  }
  prev() {
    const { base, currentStep } = this;
    base.querySelector(`[data-page="${currentStep}"]`).classList.remove('active');
    this.currentStep--;
    const nextStep = base.querySelector(`[data-page="${currentStep - 1}"]`);
    this.tick(nextStep);
  }
  start() {
    this.currentStep = 1;
    this.base.querySelector(`[data-page="1"]`).classList.add('active');
    this.base.querySelector('[data-next="1"]').style = "";
  }

  tick (nextStep) {
    const { base, currentStep } = this;
    console.log(' - currentStep:86 >', currentStep); // eslint-disable-line no-console
    if (!nextStep) {
      this.start();
      base.parentElement.classList.remove('open');
      document.body.style = "";
      return null;
    }
    nextStep.classList.add('active');
    base.querySelector('[data-next="1"]').style = "";
    const nextPage = nextStep.querySelector('[data-next]')
    if (nextPage) {
      base.querySelector('[data-next="1"]').style = "display: none;";
    }
  }
}

new Flow(flow, flowFun);