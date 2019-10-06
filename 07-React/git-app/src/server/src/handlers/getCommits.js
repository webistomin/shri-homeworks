const path = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

const getBeautifiedCommits = require('../utils/getBeautifiedCommits');
const getChunks = require('../utils/getChunks');

module.exports = getCommits = async (params) => {
  const { repositoryId, commitHash, page, paginateBy, directoryPath } = params;
  const divider = '++';
  const cwd = path.resolve(directoryPath, repositoryId);
  let command = null;
  
  if (page && paginateBy) {
    command = `git log master --skip ${page * paginateBy} --max-count=${paginateBy} --pretty=format:"%h${divider}%an${divider}%ad${divider}%s" --full-history --quiet`;
  } else {
    command = `git log ${commitHash} --pretty=format:"%h${divider}%an${divider}%ad${divider}%s" --full-history --quiet`;
  }
  
  try {
    let { stdout } = await asyncExec(command, { cwd });
    let splittedArray = stdout.toString().replace(/\n/g, divider).split(divider);
    let getChunkedArray = getBeautifiedCommits(getChunks(splittedArray, 4));
    return { commits: getChunkedArray }
  } catch (error) {
    return { message: error }
  }
};
