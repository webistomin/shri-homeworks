# CI

## Описание

Успел реализовать только базовый функционал:

* Пользователь вводит хэш, сборочную команду и нажимает кнопку "Run build"
* Агенту отправляется запрос на тестирование
* Агент запускает скачивание репозитория, тестирует его и возвращает серверу
* Становится доступной ссылка на просмотр деталей сборки по пути build/:id



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

## TODO

* [ ] Сервер должен максимально утилизировать имеющихся агентов.
* [ ] Сервер должен корректно обрабатывать ситуацию, когда агент прекратил работать между сборками.
* [ ] Сервер должен корректно обрабатывать ситуацию, когда агенты не справляются с поступающими заявками.
* [ ] Агент должен корректно обрабатывать ситуацию, когда при старте не смог соединиться с сервером.
* [ ] Агент должен корректно обрабатывать ситуацию, когда при отправке результатов сборки не смог соединиться с сервером.



