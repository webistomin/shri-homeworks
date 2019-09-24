/* eslint-disable */
const PromisePolyfill = require('../lib/promise-polyfill');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Проверка полифила для промисов:', () => {
  it('Корректно обрабатывает цепочку', async () => {
    let testValue = '';
    
    await new PromisePolyfill((resolve) => {
      resolve(42);
    })
      .then((value) => {
        testValue = value + 1;
      });
    
    testValue.should.equal(43);
  });
  
  it('Корректно обрабатывает гонку промисов', async () => {
    let testValue = '';
    
    const p1 = new PromisePolyfill((resolve) => {
      setTimeout(resolve, 200, 'Первый');
    });
    const p2 = new PromisePolyfill((resolve) => {
      setTimeout(resolve, 100, 'Второй');
    });
    
    await PromisePolyfill.race([p1, p2]).then((value) => {
      testValue = value;
    });
    
    testValue.should.equal("Второй");
  });
  
  it('Корректно обрабатывает catch', async () => {
    let testValue = null;
    
    await new Promise((resolve, reject) => {
      return setTimeout(() => {
        reject(new Error("Ошибка!"));
      }, 100);
    })
      .catch((error) => {
        testValue = error;
      });
    
    expect(testValue).to.be.an('error');
  });
  
  it('Выводит ошибку, если передать в аргумент не функцию', () => {
    expect(() => {
      new PromisePolyfill(null);
    }).to.throw(TypeError, 'Argument must be a function');
  });
  
  it('Выводит ошибку, если передать в promise.race не массив', () => {
    expect(() => {
      new PromisePolyfill.race(null);
    }).to.throw(TypeError, 'null is not iterable');
  });
});

