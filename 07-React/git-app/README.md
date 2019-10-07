# React app

Проект начал с create-react-app. Получилось реализовать навигацию по папкам, просмотр файлов, выбор репозитория в попапе. Чтобы запустить проект, нужно написать `npm run start` и `npm run server`.

## Использованные библиотеки

<table>
  <thead>
    <tr>
      <th>Библиотека</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>axios</code></td>
      <td>Библиотека для HTTP запросов к серверу</td>
    </tr>
    <tr>
      <td><code>react-helmet</code></td>
      <td>Для добавление каждой странице своего title и прочего</td>
    </tr>
    <tr>
      <td><code>react-highlight</code></td>
      <td>Подсветка синтаксиса в файлах</td>
    </tr>
  </tbody>
</table>

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
      <td><code>npm run start</code></td>
      <td>Запустить сборку, сервер и слежение за файлами</td>
    </tr>
    <tr>
      <td><code>npm run server</code></td>
      <td>Запустить сервер с API</td>
    </tr>
     <tr>
      <td><code>npm run test:unit</code></td>
      <td>Запустить юнит тесты</td>
    </tr>
    <tr>
      <td><code>npm run test:e2e</code></td>
      <td>Запустить интеграционные тесты</td>
    </tr>
  </tbody>
</table>

# Тесты

Для юнит тестов взял Jest, для интеграционного Cypress. Гермиона у меня не хочет устанавливаться.

Юнит тесты лежат в папке [spec](https://github.com/webistomin/shri-homeworks/tree/master/07-React/git-app/src/server/src/tests/specs). После выполнение теста появится папка coverage.

Интеграционные находятся в [cypress](https://github.com/webistomin/shri-homeworks/tree/master/07-React/git-app/cypress/integration/git-api). 

Немного запутался, как это всё организовать. Ведь для теста гит команд нужен гит репозиторий с историей. Создал отдельный репозиторий и добавил команду на скачивание перед тестами, но мне кажется нужно как-то сэмулировать ответы сервера. Как это сделать - я не до конца понял.


