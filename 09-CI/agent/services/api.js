const getDownloadRepo = require('../handlers/getDownloadRepo');
const runTest = require('../handlers/runTests');
const sendResult = require('../handlers/sendResult');

module.exports = class API {
  
  async downloadRepo(url, repositoryId, directoryPath) {
    await getDownloadRepo(url, repositoryId, directoryPath)
  }
  
  async sendResult(repositoryId, hash, command, start, end, result, status) {
    await sendResult(repositoryId, hash, command, start, end, result, status);
  }
  
  async runRepoTest(repositoryId, hash, command, directoryPath) {
    console.log('Running tests:');
    const start = Date.now();
    const result = await runTest(repositoryId, hash, command, directoryPath);
    const end = Date.now();
    await this.sendResult(repositoryId, hash, command, start, end, result.message, result.status);
  }
};
