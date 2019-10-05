import axios from 'axios';

export default class git {
  _apiBase = 'http://localhost:8080';
  
  getAllRepos = async () => {
    const result = await axios.get(`${this._apiBase}/api/repos/`);
    return result.data;
  };
  
  getAllRepoFiles = async (repoId) => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/`);
    return result.data;
  };
  
  getArrayOfCommits = async (repoId, commitHash) => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/commits/${commitHash}`)
    return result.data;
  };
  
  getBlob = async (repoId, commitHash = 'master', path) => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/blob/${commitHash}/${path}`);
    return result.data;
  }
}
