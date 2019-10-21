# ШРИ 2019: Performance

## Задание
Оптимизировать страницу, выложить результат на [Github-Pages](https://help.github.com/en/articles/creating-a-github-pages-site) и проверить его на [shri-perf.ru](https://shri-perf.ru), отправив адрес вашей страницы.

## Проделанные оптимизации:

### HTML

* Удалил большие коментарии типа BODY, CONTENT, SCRIPT
* Удалил critical css для touch-action
* Сминифицировал HTML

### CSS
* Удалил у карточек фоновую картинку. (cbg.jpg). Просто залил картчоку цветом **#ebebeb**.
* Почистил default.css
* Почистил main.css
* Удалил сурс мапы
* На открытие попапа навесил will-change
* Заинлайнил весь цсс
* Где смог, переписал флоаты на флексы
* Сминифицировал CSS

### JS

* Почистил main.js
* Удалил лишние зависимости
* Поставил все скрипты перед закрывающимся body
* Переписал некоторые части, чтобы занимали меньше места
* Добавил lazyload для пылесоса через IntersectionObserver
* Сминифицировал JS

### IMG
* Декодировал base64 в обычный png
* Сделал фавиконку стандартного размера 32x32
* Сжал все свг иконки
* Сжал аватарки до 57х57
* Для графика сжал картинку до 636x261
* Картинки перевёл в webp
* Иконки сделал через svg спрайт
* Мелкие фотки через webp спрайт
* Добавил отдельные фотки для мобильной версии

---

Итого: **680.84**

Gh-pages: [http://webistomin.github.io/shri-homeworks/](http://webistomin.github.io/shri-homeworks/)


