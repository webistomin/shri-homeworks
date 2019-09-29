const path = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

module.exports = getBlob = async (params) => {
  const { repositoryId, commitHash, pathToFile, directoryPath } = params;
  const command = `git show ${commitHash}:${pathToFile}`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    const { stdout } = await asyncExec(command, { cwd });
    return stdout;
  } catch (error) {
    return { message: error.stderr }
  }
};
