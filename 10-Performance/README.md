# ШРИ 2019: Performance

## Задание
Оптимизировать страницу, выложить результат на [Github-Pages](https://help.github.com/en/articles/creating-a-github-pages-site) и проверить его на [shri-perf.ru](https://shri-perf.ru), отправив адрес вашей страницы.

## Проделанные оптимизации:

### HTML

* [Удалил большие коментарии типа BODY, CONTENT, SCRIPT](https://github.com/webistomin/shri-homeworks/commit/3dc7bd0738cac89da2fe3b105707a41379c47d10)
* [Удалил critical css для touch-action](https://github.com/webistomin/shri-homeworks/commit/768e16689a4578f4efc4d350895e2b21a15f0edb)
* [Сминифицировал HTML](https://github.com/webistomin/shri-homeworks/commit/23475cb3a291f12027683c5fc29032f3a9add2d9)

### CSS
* [Удалил у карточек фоновую картинку. (cbg.jpg). Просто залил картчоку цветом **#ebebeb**.](https://github.com/webistomin/shri-homeworks/commit/3dc7bd0738cac89da2fe3b105707a41379c47d10)
* [Почистил default.css](https://github.com/webistomin/shri-homeworks/commit/33dcc7fcccda3e0069988496d5fd7bf655be20f2)
* [Почистил main.css](https://github.com/webistomin/shri-homeworks/commit/539a63cd2b396205b9bd897a618a6123132ff84f#diff-23b024677d4732ee53b6d7bdc52e0fe2)
* [Удалил сурс мапы](https://github.com/webistomin/shri-homeworks/commit/61c28bd2d1364b0081cbb817c16f1bb8eaa67759)
* [На открытие попапа навесил will-change](https://github.com/webistomin/shri-homeworks/commit/841ffa356d162f030d5dde0efa5233df7262eb6f)
* [Заинлайнил весь цсс](https://github.com/webistomin/shri-homeworks/commit/06b8b8ddbe7c8b4d433712c79862f11f33269bd8)
* [Где смог, переписал флоаты на флексы](https://github.com/webistomin/shri-homeworks/commit/7ce51f4572f892006fee3201bb370808daa0b2b7)
* [Сминифицировал CSS](https://github.com/webistomin/shri-homeworks/commit/00329b831ee5014a551a897cf2e7b5111ef558c7)

### JS

* [Почистил main.js](https://github.com/webistomin/shri-homeworks/commit/c2767900af7bdd041d8702513f04acba9f6b37ad)
* [Удалил лишние зависимости](https://github.com/webistomin/shri-homeworks/commit/162dadb2e89d33706d3033777706c0d830ce0f96)
* [Поставил все скрипты перед закрывающимся body](https://github.com/webistomin/shri-homeworks/commit/2621cd110906c7bb0782069cdc2aab413e877332)
* [Переписал некоторые части, чтобы занимали меньше места](https://github.com/webistomin/shri-homeworks/commit/333780902c17553e9e881ae4dfe3f73aab3c6f84)
* [Добавил lazyload для пылесоса через IntersectionObserver](https://github.com/webistomin/shri-homeworks/commit/a8d1384e0be016fa373d51743d0957264327d917)
* [Сминифицировал JS](https://github.com/webistomin/shri-homeworks/commit/ebfbb92883fe81d823e1d7962c858087990e2eac)

### IMG
* [Декодировал base64 в обычный png](https://github.com/webistomin/shri-homeworks/commit/2a723d5b0175ffbe0c60a3676332f5c859ddc553)
* [Сделал фавиконку стандартного размера 32x32](https://github.com/webistomin/shri-homeworks/commit/c8e17935675506426a6f57bf5531bed6af5a9078)
* [Сжал все свг иконки](https://github.com/webistomin/shri-homeworks/commit/ef9a547ac41e71517db8f4ea48ec23e210835a62)
* [Сжал аватарки до 57х57](https://github.com/webistomin/shri-homeworks/commit/3a55cea6cbb0b305abd3e1ba7f5055f06c9ade40)
* [Для графика сжал картинку до 636x261](https://github.com/webistomin/shri-homeworks/commit/912aad4ee4640753406d41222fb1573c1b141cf9)
* [Картинки перевёл в webp](https://github.com/webistomin/shri-homeworks/commit/6513223a30d97327d46323490baa4b76c0686be0)
* [Иконки сделал через svg спрайт](https://github.com/webistomin/shri-homeworks/commit/f07673ea97a94516083e2934e92f466eea21f31a)
* [Мелкие фотки через webp спрайт](https://github.com/webistomin/shri-homeworks/commit/85c14df36da3277945c37a919351c7dbf6c7ae1b)
* [Добавил отдельные фотки для мобильной версии](https://github.com/webistomin/shri-homeworks/commit/a59ebc6a04cffd482512fbfca9f3ea1d7def6922)

---

Итого: **683.28**

Gh-pages: [http://webistomin.github.io/shri-homeworks/](http://webistomin.github.io/shri-homeworks/)

Для всех оптимизаций нашел соответствующий коммит на случай возникновения спорных случаев.



