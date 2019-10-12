const path = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);
const getStat = require('../utils/getFileStat');

module.exports = getBlob = async (params) => {
  const { repositoryId, commitHash, pathToFile, directoryPath } = params;
  const command = `git show ${commitHash}:${pathToFile}`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    const { stdout } = await asyncExec(command, { cwd });
    const size = await getStat(path.resolve(cwd, pathToFile));
    return {blob: stdout, size: size.size};
  } catch (error) {
    return { message: error }
  }
};
