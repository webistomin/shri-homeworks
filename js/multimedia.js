document.addEventListener('DOMContentLoaded', () => {
  const t = document.querySelector('.buttons-wrap'),
    e = document.querySelector('#cc .card-description');
    const n = document.querySelector('.buttons-wrap .button_yellow'), c = document.createElement('div'),
      s = document.createElement('p'), o = document.createElement('ol'), i = document.createElement('li'),
      a = document.createElement('li');
    c.setAttribute('class', 'purchase-list-wrap'), s.setAttribute('class', 'card-description card-description_big description_critical'), s.textContent = 'Список покупок:', o.setAttribute('class', 'purchase-list'), i.setAttribute('class', 'purchase-list__item'), i.textContent = 'Хлеб', a.setAttribute('class', 'purchase-list__item'), a.textContent = 'Молоко', c.appendChild(s), c.appendChild(o), o.appendChild(i), o.appendChild(a), n.onclick = (() => {
      e.replaceWith(c), t.style.display = 'none';
    });
 document.getElementsByClassName('header-menu__switcher')[0].addEventListener('click', () => {
    document.getElementsByClassName('header-menu')[0].classList.toggle('header-menu_active');
  });
}, !1);
