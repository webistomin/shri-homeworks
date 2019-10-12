export {};

const path = require('path');
const util = require('util');
const fs = require('fs');
const asyncReadDir = util.promisify(fs.readdir);
const getFileStat = require('./getFileStat');

const getAllFilesInsideFolder = async(dir: string): Promise<object> => {
  try {
    const folderStat = await getFileStat(path.resolve(dir));
    if (folderStat.isDirectory()) {
      let result = [];
      const files = await asyncReadDir(dir);
      const filesWithPaths = files.map((file: string) => path.resolve(dir, file));

      for (const file of filesWithPaths) {
        const isGitFolder = file.endsWith('.git');
        const fileStat = await getFileStat(path.resolve(dir));

        if (fileStat.isDirectory() && !isGitFolder) {
          const filesInsideDirectory = await asyncReadDir(path.resolve(file));
          if (filesInsideDirectory.includes('.git')) {
            result.push(path.basename(file));
          }
        }
      }

      return { 'git_repos': result };
    }
  } catch (error) {
    return { message: error };
  }

  return { message: '' }
};

module.exports = getAllFilesInsideFolder;
