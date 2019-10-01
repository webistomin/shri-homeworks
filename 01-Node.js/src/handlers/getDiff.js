const path = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

module.exports = getDiff = async (params) => {
  const { repositoryId, commitHash, directoryPath } = params;
  
  const command = `git diff ${commitHash} ${commitHash}~`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    const { stdout } = await asyncExec(command, { cwd });
    const stringResult = stdout.toString();
    return { diff: stringResult };
  } catch (error) {
    return { message: error.stderr }
  }
};
