const path = require('path');
const util = require('util');
const fs = require('fs');
const asyncFsStat = util.promisify(fs.stat);
const asyncReadDir = util.promisify(fs.readdir);

module.exports = getAllFilesInsideFolder = async(dir) => {
  try {
    const folderStat = await asyncFsStat(path.resolve(dir));
    
    if (folderStat.isDirectory()) {
      let result = [];
      const files = await asyncReadDir(dir);
      const filesWithPaths = files.map(file => path.resolve(dir, file));
      
      for (const file of filesWithPaths) {
        const isGitFolder = file.endsWith('.git');
        const fileStat = await asyncFsStat(path.resolve(dir));
        
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
};
