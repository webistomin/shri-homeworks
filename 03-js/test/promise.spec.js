/* eslint-disable */
var PromisePolyfill = require('../lib/promise-polyfill');
var should = require('should');

describe('Проверка полифила для промисов:', () => {
  it('Корректно обрабатывает цепочку', async () => {
    let testValue = '';
    
    await new PromisePolyfill((resolve) => {
      resolve(42);
    })
      .then((value) => {
        return value + 1;
      })
      .then(() => {
        return new PromisePolyfill((resolve) => {
          resolve(137);
        });
      })
      .then((value) => {
        testValue = value;
      });
    
    testValue.should.equal(137);
  });
  
  it('Корректно обрабатывает гонку промисов', async () => {
    let testValue = '';
    
    const p1 = new PromisePolyfill((resolve) => {
      setTimeout(resolve, 500, 'Первый');
    });
    const p2 = new PromisePolyfill((resolve) => {
      setTimeout(resolve, 100, 'Второй');
    });
    
    await PromisePolyfill.race([p1, p2]).then((value) => {
      testValue = value;
    });
    
    testValue.should.equal("Второй");
  });
});
