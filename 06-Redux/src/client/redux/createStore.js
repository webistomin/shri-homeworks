import Store from './store';

export const createStore = (reducers, enhancer) => {
  let store = new Store(reducers);
  
  if (typeof enhancer === 'function') {
    store = enhancer(store);
  }
  
  return store;
};
