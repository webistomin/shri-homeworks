# Redux flow

## Установка проекта

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
      <td><code>npm run dev</code></td>
      <td>Запустить сборку, сервер и слежение за файлами. <br> http://localhost:3000/</td>
    </tr>
  </tbody>
</table>

## Использованные технологии
<table>
  <thead>
    <tr>
      <th>Технология</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>lodash.deepclone</td>
      <td>Небольшой модуль из lodash для копирования стейта</td>
    </tr>
    <tr>
      <td>axios</td>
      <td>HTTP-клиент для запросов к API</td>
    </tr>
  </tbody>
</table>

## Реализованный функционал

Сделал классы Store и View, создание стора через createStore. Добавил два компонента: поисковую строку и таблицу, куда должны отрисовываться данные. Реализовал логику поисковой строки. Не получилось приделать middleware для запроса на бэк.
