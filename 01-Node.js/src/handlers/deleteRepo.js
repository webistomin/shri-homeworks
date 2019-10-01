const path = require('path');
const rimraf = require('rimraf');

const getFileStat = require('../utils/getFileStat');

module.exports = deleteRepo = async (params) => {
  const { repositoryId, directoryPath } = params;
  const reposPath = path.resolve(directoryPath, repositoryId);
  
  let getDirStat = await getFileStat(reposPath);
  
  if (getDirStat.code !== 'ENOENT') {
    try {
      await rimraf(reposPath, () => {});
      return { message: `${repositoryId} удалён.` };
    } catch (error) {
      return { message: error.code };
    }
  } else {
    return { message: 'Репозитория не существует' };
  }
};
