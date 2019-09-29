const path = require('path');
const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

const getFileStat = require('../utils/getFileStat');

module.exports = getDownloadRepository = async (params) => {
  const { url, repositoryId, directoryPath } = params;
  const command = `git clone ${url} ${repositoryId}`;
  const cwd = `${directoryPath}`;
  
  let getDirStat = await getFileStat(path.resolve(cwd, repositoryId));
  
  if (getDirStat.code === 'ENOENT') {
    try {
      await asyncExec(command, { cwd });
      return { message: `Репозиторий ${repositoryId} добавлен в рабочую директорию.` };
    } catch (error) {
      return { message: 'Ошибка при скачивании репозитория.' }
    }
  } else {
    return { message: 'Репозиторий уже существует. Удалите его во избежание конфликта.' }
  }
};
