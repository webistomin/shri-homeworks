export {}

const util = require('util');
const fs = require('fs');
const asyncFsStat = util.promisify(fs.stat);

const getFileStat = async (dir: string): Promise<object> => {
  try {
    return await asyncFsStat(dir);
  } catch (error) {
    return error
  }
};

module.exports = getFileStat;
