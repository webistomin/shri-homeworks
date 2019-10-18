document.addEventListener('DOMContentLoaded', () => {
  const t = document.querySelector('.buttons-wrap'),
        e = document.querySelector('#cc .card-description');
  
  const n = document.querySelector('.buttons-wrap .button_yellow'),
        c = document.createElement('div'),
        s = document.createElement('p'),
        o = document.createElement('ol'),
        i = document.createElement('li'),
        a = document.createElement('li');
  
    c.setAttribute('class', 'purchase-list-wrap');
    c.innerHTML = `<p class="card-description card-description_big description_critical">
                    Список покупок:</p>
                    <ol class="purchase-list">
                        <li class="purchase-list__item">Хлеб</li>
                        <li class="purchase-list__item">Молоко</li>
                    </ol>`;
    n.onclick = (() => {
      e.replaceWith(c), t.style.display = 'none';
    });
 document.getElementsByClassName('header-menu__switcher')[0].addEventListener('click', () => {
    document.getElementsByClassName('header-menu')[0].classList.toggle('header-menu_active');
  });
}, !1);
