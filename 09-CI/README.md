# CI

## Описание

Успел реализовать следующий функционал:

* Пользователь вводит хэш, сборочную команду, так как указана в package.json и нажимает кнопку "Run build"
* Агенту отправляется запрос на тестирование
* Агент запускает скачивание репозитория, тестирует его и возвращает серверу
* Становится доступной ссылка на просмотр деталей сборки по пути build/:id

Количество одновременно работающих агентов не может быть больше 5.

Если после принятия задачи на сборку, сервер отключился, агент попытается несколько раз отправить результат. Если так и не получилось отправить, агент выключается и сохраняет результат работы в (data.json)[https://github.com/webistomin/shri-homeworks/blob/master/09-CI/agent/data.json].

Если же всё прошло успешно, то на главной становится доступной ссылка на результат. Объект сохраняется в файл (data.json)[https://github.com/webistomin/shri-homeworks/blob/master/09-CI/server/data.json]. При включении сервера, оттуда подтягиваются результаты прошлых сборок.

---

Конфиг для сервера хранится в [server/config.js](https://github.com/webistomin/shri-homeworks/blob/master/09-CI/server/config.js)

* port - порт на котором запускается сервер
* repo - тестируемый репозиторий

Конфиг для агента хранится в [agent/config.js](https://github.com/webistomin/shri-homeworks/blob/master/09-CI/agent/config.js)

* port - порт на котором запускается агент
* hostPort - порт для сервера

## Команды

<table>
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>npm i</code></td>
      <td>Установить зависимости</td>
    </tr>
    <tr>
      <td><code>cd server && npm run start</code></td>
      <td>Запустить сервер</td>
    </tr>
    <tr>
      <td><code>cd agent && npm run start</code></td>
      <td>Запустить агента</td>
    </tr>
  </tbody>
</table>

## Используемые библиотеки

<table>
  <thead>
    <tr>
      <th>Библиотека</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>nanoid</code></td>
      <td>Генерация уникальных id</td>
    </tr>
    <tr>
      <td><code>axios</code></td>
      <td>Библиотека для HTTP-запросов</td>
    </tr>
  </tbody>
</table>




