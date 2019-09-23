const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const util = require('util');
const asyncFsStat = util.promisify(fs.stat);
const asyncReadDir = util.promisify(fs.readdir);

exports.getChunks = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) {
    return cache;
  }
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache
};

exports.getBeautifiedCommits = (array) => {
  let keys = ['short_commit', 'author', 'date', 'message'];
  return array.map(array => {
    let object = {};
    keys.forEach((key, i) => object[key] = array[i]);
    return object;
  })
};

exports.isCommandValid = (command, cwd) => {
  try {
    cp.execSync(command, cwd ? {cwd} : '');
    return true;
  } catch (err) {
    return false;
  }
};

exports.getAllFilesInsideFolder = async (dir) => {
  try {
    const isExists = await asyncFsStat(path.resolve(dir));
  
    if (isExists.isDirectory()) {
      let result = [];
      const files = await asyncReadDir(dir);
      const filesFullPath = files.map(file => path.resolve(dir, file));
    
      for (const file of filesFullPath) {
        const isGitFolder = file.endsWith('.git');
        const isExists = await asyncFsStat(path.resolve(dir));
      
        if (isExists.isDirectory() && !isGitFolder) {
          const filesInsideDirectory = await asyncReadDir(path.resolve(file));
          if (filesInsideDirectory.includes('.git')) {
            result.push(path.basename(file));
          }
        }
      }
    
      return { 'git_repos': result }
    }
  } catch (error) {
    return { message: `Путь ${dir} не существует` }
  }
};

exports.getPaginatedData = (array, pageSize = 10, pageNumber) => {
  --pageNumber;
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
};
