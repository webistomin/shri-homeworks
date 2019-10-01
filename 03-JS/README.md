# Полифил для промиса

## Примеры использования

```js
const promise = new Promise((resolve) => {
  resolve(42);
});

promise
  .then((value) => {
    console.log(value); //42
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 43
    return new Promise((resolve) => {
      resolve(137);
    });
  })
  .then((value) => {
    console.log(value); // 137
    throw new Error();
  })
  .then(() => {
      console.log('Будет проигнорировано');
    },
    () => {
      return 'Ошибка обработана';
    }
  )
  .then((value) => {
    console.log(value); // Ошибка обработана"
  });

const catchPromise = new Promise((resolve, reject) => {
  return setTimeout(() => {
    reject(new Error("Ошибка!"));
  }, 1000);
});

catchPromise.catch((error) => {
  console.log(error)
}); // выведет "Error: Ошибка!" спустя одну секунду

const p1 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'Первый');
});
const p2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'Второй');
});

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "Второй"
  // Оба выполнятся, но p2 быстрее
});
```

## Реализованный функционал

* Чейнинг промисов через ```then```
* Обработку ошибок через ```catch```
* ```promise.resolve()```
* ```promise.reject()```
* ```promise.race()```

## Комментарии

Код писал на ES5 синтаксисе, так как хотелось проверить работу в старых браузерах, без использования транспиляторов и т.д. Промис будет использоваться только в том случае, когда нативный не поддерживается, но такая проверка возможно перетрёт уже использованную библиотеку, так как идёт присвоение в ```globalNamespace.Promise```. Попробовал написать тесты, покрыл пару возможных кейсов для чейнинга и гонки промисов. 

Работу в браузере можно проверить, открыв ```index.html``` например в IE11. В консоль будут выведены значения из примера использования выше.

