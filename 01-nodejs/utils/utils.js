const cp = require('child_process');
const path = require('path');
const fs = require('fs');

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

exports.getAllFilesInsideFolder = (dir) => {
  
  if (fs.existsSync(dir)) {
    let result = [];
    const files = fs.readdirSync(dir).map(file => path.posix.join(dir, file));
  
    files.forEach((file) => {
      if (fs.statSync(file).isDirectory() && file.slice(file.lastIndexOf('/') + 1 , file.length) !== '.git') {
        if (fs.readdirSync(`${file}/`).map(file => file).includes('.git')) {
          result.push(file.slice(file.lastIndexOf('/') + 1 , file.length));
        }
      }
    });
    return result
  }
  
  return `Путь ${dir} не существует`
};

exports.deleteFolderRecursive = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    let curPath = path.posix.join(dir, file);
    if(fs.lstatSync(curPath).isDirectory()) {
      module.exports.deleteFolderRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(dir);
};

exports.getPaginatedData = (array, pageSize = 10, pageNumber) => {
  --pageNumber;
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
};
