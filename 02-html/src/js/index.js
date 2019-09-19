let lastHeight = window.innerHeight;
let vh = window.innerHeight * 0.01;
const { body } = document;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {

  if (window.innerWidth > window.innerHeight
    || Math.abs(lastHeight - window.innerHeight) > 200) {

    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    lastHeight = window.innerHeight;

  }

}, { passive: true });

const { disableBodyScroll } = bodyScrollLock;
const { enableBodyScroll } = bodyScrollLock;
