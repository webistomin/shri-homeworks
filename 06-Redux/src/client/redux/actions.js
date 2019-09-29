import { Types } from './types';
import axios from 'axios';

export const searchQueryAction = (query) => ({
  type: Types.SEARCH_QUERY,
  payload: query,
});

export const saveFiles = (files) => ({
  type: Types.SAVE_FILES,
  payload: files,
});

export const fetchFilesFailure = (message) => ({
  type: Types.FETCH_FILES_FAILURE,
  payload: message,
});

export const fetchFilesSuccess = (message) => ({
  type: Types.FETCH_FILES_SUCCESS,
  payload: message,
});

export const fetchFiles = (searchQuery) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/api/repos/${searchQuery}`)
      .then((res) => {
        dispatch(saveFiles(res.data.files));
      })
      .catch((error) => {
        dispatch(fetchFilesFailure(error));
      });
  };
};

// alena/tree/da6c3a321792c505a41c3016a0e201cb37ba1b36/app/
