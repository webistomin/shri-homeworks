const fsPath = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

interface getAllFilesByCommitParamsInterface {
  repositoryId: string;
  directoryPath: string;
  commitHash: string;
  path: string;
}

const getAllFilesByCommit = async (params: getAllFilesByCommitParamsInterface): Promise<object> => {
  const { repositoryId, commitHash, path, directoryPath } = params;
  const cwd = fsPath.resolve(directoryPath, repositoryId);
  let command = null;

  // -r for recursive search
  if (commitHash && path) {
    command = `git ls-tree ${commitHash} ${path} --name-only`;
  } else if (commitHash && !path) {
    command = `git ls-tree ${commitHash} --name-only`;
  } else if (!commitHash && !path) {
    command = 'git ls-tree master --name-only';
  }

  try {
    const { stdout } = await asyncExec(command, { cwd });
    const allFiles = stdout.toString().split('\n');
    const allFilesFormatted = allFiles.filter((el: string) => el);
    return { files: allFilesFormatted };
  } catch (error) {
    return { message: error };
  }
};

module.exports = getAllFilesByCommit;
