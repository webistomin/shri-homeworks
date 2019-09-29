import cloneDeep from 'lodash.clonedeep'
import { Types } from './types';

const initialState = {
  files: [],
  query: '',
};

export const reducers = (previousState = initialState, action) => {
  const clonedState = cloneDeep(previousState);
  
  switch (action.type) {
    
    case Types.SEARCH_QUERY:
      return Object.assign({}, clonedState, {
        query: action.payload
      });
      
    case Types.SEARCH_FILES:
      return Object.assign({}, clonedState, {
        files: [
          ...action.payload,
        ]
      });
      
    case Types.INIT:
    default:
      return previousState
  }
};
