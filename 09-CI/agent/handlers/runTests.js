const path = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

const runTest = async (repositoryId, hash, command, directoryPath) => {
  const testCommand = `git checkout ${hash} && npm i && npm run ${command}`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    const result = await asyncExec(testCommand, { cwd });
    return { message: result.stdout, status: 'success' };
  } catch (error) {
    return { message: error.stderr, status: 'failure' };
  }
};

module.exports = runTest;
