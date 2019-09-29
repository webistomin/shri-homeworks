import { Types } from './types';

export const reducers = (state, action) => {
  switch (action.type) {
  case Types.SEARCH_FILES:
    return 1;
  case Types.INIT:
  default:
    return state
  }
};
