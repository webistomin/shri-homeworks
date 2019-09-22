(function() {
  'use strict';

  var promiseStates = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
  };

  var isObjectThenable = function(object) {
    return typeof object === 'object' && typeof object.then === 'function';
  };

  var Promise = function(executor) {
    this.state = promiseStates.pending;
    this.value = null;
    this.promisesQueue = [];

    executor(this.resolver.bind(this), this.rejecter.bind(this));
  };

  Promise.prototype.setPromiseState = function(state, value) {
    this.state = state;
    this.value = value;
  };

  Promise.prototype.resolver = function(value) {
    if (isObjectThenable(value)) {
      value.then.call(value, this.resolver.bind(this), this.rejecter.bind(this));
      return;
    }

    if (this.state !== promiseStates.pending) {
      return;
    }

    this.setPromiseState(promiseStates.fulfilled, value);
    this.runner();
  };

  Promise.prototype.rejecter = function(reason) {
    if (this.state !== promiseStates.pending) {
      return;
    }

    this.setPromiseState(promiseStates.rejected, reason);
    this.runner();
  };

  Promise.prototype.handler = function(promise) {
    if (this.state === promiseStates.pending) {
      this.promisesQueue.push(promise);
    } else {
      var isFulfilled = this.state === promiseStates.fulfilled;
      var onFulfilled = promise.onFulfilled;
      var onRejected = promise.onRejected;
      var resolve = promise.resolve;
      var reject = promise.reject;
      var fn = isFulfilled ? onFulfilled : onRejected;

      if (!fn) {
        if (isFulfilled) {
          resolve(this.value);
        } else {
          reject(this.value);
        }
        return;
      }

      try {
        resolve(fn(this.value));
      } catch (error) {
        reject(error);
      }
    }
  };

  Promise.prototype.runner = function() {
    var self = this;
    this.promisesQueue.forEach(function(promise) {
      return self.handler(promise);
    });
  };

  Promise.prototype.then = function(onFulfilled, onRejected) {
    var self = this;
    return new Promise(function(resolve, reject) {
      return self.handler({
        onFulfilled: onFulfilled,
        onRejected: onRejected,
        resolve: resolve,
        reject: reject
      });
    });
  };

  Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
  };

  Promise.resolve = function(value) {
    return new Promise(function(resolve) {
      return resolve(value);
    });
  };

  Promise.reject = function(reason) {
    return new Promise(function(resolve, reject)  {
      return reject(reason);
    });
  };

  var globalNamespace = (function() {
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  })();

  if (!('Promise' in globalNamespace)) {
    console.info('promise polyfill enabled');
    globalNamespace.Promise = Promise;
  }
})();
