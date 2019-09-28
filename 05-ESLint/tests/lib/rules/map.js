'use strict';

const rule = require('../../../lib/rules/map');
const RuleTester = require('eslint').RuleTester;
const RuleTesterRunner = new RuleTester();

RuleTesterRunner.run('_.map to native Array#map', rule, {
  
  valid: [
    
    // Игнорируем при работе с объектами
    {
      code: '_.map({}, fn);',
    },
  
    // Игнорируем, если переопределили _
    {
      code: 'var _ = { map: function() { return [] } }; test = _.map([], fn);'
    },
  
    // Игнорируем, если вызов с другой библиотекой
    {
      code: 'underscore.map([1, 2, 3], fn);'
    }
    
  ],
  
  invalid: [
  
    // Можно фиксить на нативный map
    {
      code: '_.map([1, 2, 3], fn);',
      errors: [
        { messageId: 'errorMsg', }
      ],
    },
    
    // Обрабатываем Array.from
    {
      code: '_.map(Array.from("SHRI"), fn);',
      errors: [
        { messageId: 'errorMsg', }
      ],
    },
  
    // Обрабатываем new Array
    {
      code: '_.map(new Array("SHRI"), fn);',
      errors: [
        { messageId: 'errorMsg', }
      ],
    },
    
    // Если в переменной хранится массив, то фиксим
    {
      code: 'var a = [1, 2, 3]; _.map(a, fn);',
      errors: [
        { messageId: 'errorMsg', }
      ],
    },
    
  ],
  
});
