const cp = require('child_process');
const util = require('util');
const asyncExec = util.promisify(cp.exec);

const getDownloadRepository = async(url, repositoryId, directoryPath) => {
  const command = `git clone ${url} ${repositoryId}`;
  const cwd = `${directoryPath}`;
  
  try {
    await asyncExec(command, { cwd });
    return { message: `Репозиторий ${repositoryId} добавлен в рабочую директорию.` };
  } catch (error) {
    return { message: 'Ошибка при скачивании репозитория.' }
  }
};

module.exports = getDownloadRepository;
