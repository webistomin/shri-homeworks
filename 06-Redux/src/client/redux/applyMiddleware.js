export const applyMiddleware = (middleware) => (store) => {
  let { dispatch } = store;
  
  middleware.forEach(middleware =>
    dispatch = middleware(store)(dispatch)
  );
  
  store.dispatch = dispatch;
  
  return store;
};
