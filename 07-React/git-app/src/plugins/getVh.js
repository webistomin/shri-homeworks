import throttle from 'lodash.throttle'

export const getVh = () => {
  let lastHeight = window.innerHeight;
  let vh = window.innerHeight * 0.01;
  
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  window.addEventListener('resize', throttle(() => {
    if (window.innerWidth > window.innerHeight
      || Math.abs(lastHeight - window.innerHeight) > 200) {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      lastHeight = window.innerHeight;
    }
  }, 500), { passive: true });
};
