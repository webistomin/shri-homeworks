import { Types } from './types';

const initialState = {
  files: [],
  query: '',
};

export const reducers = (previousState = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH_QUERY:
      return Object.assign({}, previousState, {
        query: action.payload
      });
    case Types.SEARCH_FILES:
      return Object.assign({}, previousState, {
        files: action.payload
      });
    case Types.INIT:
    default:
      return previousState
  }
};
