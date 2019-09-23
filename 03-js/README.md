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

  const p1 = new Promise(function(resolve) {
    setTimeout(resolve, 500, 'Первый');
  });
  const p2 = new Promise(function(resolve) {
    setTimeout(resolve, 100, 'Второй');
  });

  Promise.race([p1, p2]).then((value) => {
    console.log(value); // "Второй"
    // Оба выполнятся, но p2 быстрее
  });
```
