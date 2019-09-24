const util = require('util');
const fs = require('fs');
const asyncFsStat = util.promisify(fs.stat);

module.exports = getFileStat = async (dir) => {
  try {
    return await asyncFsStat(dir);
  } catch (error) {
    return error
  }
};
