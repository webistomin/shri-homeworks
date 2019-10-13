# TypeScript

Проект был создан на основе create-react-app, поэтому просто добавил types для проекта. 
Для серверной части использовал ts-node.
Приложение осталось работоспособным.

Код для реакта находится в папке [src](https://github.com/webistomin/shri-homeworks/tree/master/08-TypeScript/src).

Для Node.js в папке [src/server](https://github.com/webistomin/shri-homeworks/tree/master/08-TypeScript/src/server).

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
      <td>Запустить сборку, сервер и слежение за файлами для клиентской части</td>
    </tr>
    <tr>
      <td><code>npm run server</code></td>
      <td>Запустить ts-node и nodemon для Node.js</td>
    </tr>
  </tbody>
</table>  

## Описание

Переводить проект было не очень сложно. Большинство ошибок легко гуглить, большое комьюнити. Писать новые проекты на TypeScript пока не решаюсь.

В процессе перевода были найдены некоторые ошибки импорта, неверной пагинации, которые без TypeScript никак не проявлялись.

В [одном месте](https://github.com/webistomin/shri-homeworks/blob/master/08-TypeScript/src/pages/Blob/Blob.tsx#L24) пришлось использовать any. Не понимаю как поправить. Types для роутера подключил.
