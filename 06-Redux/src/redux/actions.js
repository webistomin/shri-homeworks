import { Types } from './types';

export const searchFilesAction = (files) => ({
  type: Types.SEARCH_FILES,
  payload: files,
});

export const searchQueryAction = (query) => ({
  type: Types.SEARCH_QUERY,
  payload: query,
});
