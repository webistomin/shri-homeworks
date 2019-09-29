import Store from './store';

export const createStore = (reducers) => {
  return new Store(reducers);
};
