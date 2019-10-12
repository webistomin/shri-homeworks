const getAllFilesInsideFolder = require('../utils/getAllFilesInsideFolder');

const getAllRepoFiles = async (directoryPath: string) : Promise<object> => {
  try {
    let result = await getAllFilesInsideFolder(directoryPath);
    return result
  } catch (error) {
    return { message: error }
  }
};

module.exports = getAllRepoFiles;
