const getAllFilesInsideFolder = require('../utils/getAllFilesInsideFolder');

module.exports = getAllRepoFiles = async (directoryPath) => {
  try {
    let result = await getAllFilesInsideFolder(directoryPath);
    return { repos: result }
  } catch (error) {
    return { message: error }
  }
};
