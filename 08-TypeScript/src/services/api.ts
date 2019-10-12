import axios from 'axios';

export interface ResponseGetAllRepoFiles {
  files: [];
}

export interface ResponseGetArrayOfCommits {
  commits: [];
}

export interface ResponseGetAllRepos {
  git_repos: [];
}

export interface ResponseGetTree {
  files: [];
}

export interface ResponseGetBlob {
  blob: string;
  message?: string;
}

export default interface CommitsModel {
  date: string;
  short_commit: string;
  message: string;
  author: string;
}

export default class API {
  private readonly _apiBase = 'http://localhost:8080';

  public getAllRepos = async () : Promise<ResponseGetAllRepos> => {
    const result = await axios.get(`${this._apiBase}/api/repos/`);
    return result.data;
  };

  public getAllRepoFiles = async (repoId: string) : Promise<ResponseGetAllRepoFiles> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/`);
    return result.data;
  };

  public getArrayOfCommits = async (repoId: string, commitHash: string) : Promise<ResponseGetArrayOfCommits> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/commits/${commitHash}`);
    return result.data;
  };

  public getBlob = async (repoId: string, commitHash: string = 'master', path: string) : Promise<ResponseGetBlob> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/blob/${commitHash}/${path}`);
    return result.data;
  };

  public getTree = async (repoId: string, commitHash = 'master', path: string) : Promise<ResponseGetTree> => {
    const result = await axios.get(`${this._apiBase}/api/repos/${repoId}/tree/${commitHash}/${path}`);
    return result.data;
  }
}
