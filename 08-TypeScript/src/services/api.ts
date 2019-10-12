import axios from 'axios';

export default class API {
  private readonly _apiBase = 'http://localhost:8080';

  public getAllRepos = async () : Promise<object> => {
    const result = await axios.get(`${this._apiBase}/api/repos/`);
    return result.data;
  };

  public getAllRepoFiles = async (repoId: string) : Promise<object> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/`);
    return result.data;
  };

  public getArrayOfCommits = async (repoId: string, commitHash: string) : Promise<object> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/commits/${commitHash}`);
    return result.data;
  };

  public getBlob = async (repoId: string, commitHash: string = 'master', path: string) : Promise<object> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/blob/${commitHash}/${path}`);
    return result.data;
  };

  public getTree = async (repoId: string, commitHash = 'master', path: string) : Promise<object> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/tree/${commitHash}/${path}`);
    return result.data;
  }
}
