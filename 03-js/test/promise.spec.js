/* eslint-disable */
var PromisePolyfill = require('../lib/promise-polyfill');
var should = require('should');

describe('Проверка полифила для промисов:', () => {
  it('Корректно обрабатывает цепочку', async() => {
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
});
