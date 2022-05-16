const swiper = document.querySelector('[data-swiper]');
if (swiper) {
  let current = 0;
  const pages = swiper.querySelectorAll('.content-changed');
  setInterval(() => {
    pages[current].classList.remove('active');
    current++;
    console.log(' - current:8 >', current); // eslint-disable-line no-console
    console.log(' - pages.length:8 >', pages.length); // eslint-disable-line no-console
    current = (current >= pages.length)? 0 : current;
    pages[current].classList.add('active');
  }, 5000);
}