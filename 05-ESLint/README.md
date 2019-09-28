# eslint-plugin-lodash-to-native

ESLint плагин, заменяющий _.map из _lodash_ на нативный Array#map.

## Установка

Сначала необходимо установить [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Затем установить плагин `eslint-plugin-lodash-to-native`:

```
$ npm i github.com/webistomin/eslint-plugin-lodash-to-native.git --save-dev
```

**Примечание:** Если вы установили ESLint глобально (используя `-g` флаг), тогда вам также нужно установить `eslint-plugin-lodash-to-native` глобально.

## Пример использования

Добавьте `lodash-to-native` в секцию плагинов вашего конфигурационного файла `.eslintrc.js`. Вы можете опускать префикс `eslint-plugin-`. Затем сконфигурируйте правила, который хотите использовать:

```js
/* .eslintrc.js */

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  "plugins": [
    "lodash-to-native"
  ],
  "rules": {
    "lodash-to-native/map": "warn"
  },
};

```

## Правила

<table>
    <tr>
        <td>lodash-to-native/map</td>
        <td>Правило должно находить использование функции `_.map`, например `_.map(collection, fn)`, и, если это возможно, предлагать заменить его на использование нативного `Array#map`.</td>
    </tr>
</table>

## Тестирование

Для теста используется команда:

```
$ npm test
```

Пример использования в файле [example/index.js](example/index.js). Если будут ошибки ESLint, о том, что плагин не найдён, то нужно вырезать папку _example_ в другое место и запускать вне проекта.






