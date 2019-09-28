// import _ from 'lodash';
// const _ = { map: () => [] };

// Игнорируем при работе с объектами

_.map({ foo: 'bar' }, ((item) => {
  console.log(item);
}));

// Можно фиксить на нативный map

_.map([1, 2, 3], ((item) => {
  console.log(item);
}));
