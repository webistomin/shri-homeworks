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

const detectMob = () => !!(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i));

const isMobile = detectMob();

const { disableBodyScroll } = bodyScrollLock;
const { enableBodyScroll } = bodyScrollLock;

const repositorySelectButton = document.getElementById('js-repository-select-btn');
const repositorySelectPopup = document.getElementById('js-repository-select-popup');

const branchSelectButton = document.getElementById('js-branch-select-btn');
const branchSelectPopup = document.getElementById('js-branch-select-popup');

const openPopup = (popupEl) => {

  popupEl.classList.toggle('popup_visible');
  if (isMobile) {

    disableBodyScroll();

  }

};

const closePopup = (popupEl) => {

  if (popupEl.classList.contains('popup_visible')) {

    popupEl.classList.remove('popup_visible');
    if (isMobile) {

      enableBodyScroll();

    }

  }

};

if (repositorySelectButton) {

  repositorySelectButton.addEventListener('click', () => {

    openPopup(repositorySelectPopup);

  });

}

if (repositorySelectPopup) {

  repositorySelectPopup.addEventListener('click', (e) => {

    closePopup(e.target);

  });

}

if (branchSelectButton) {

  branchSelectButton.addEventListener('click', () => {

    openPopup(branchSelectPopup);

  });

}

if (branchSelectPopup) {

  branchSelectPopup.addEventListener('click', (e) => {

    closePopup(e.target);

  });

}
