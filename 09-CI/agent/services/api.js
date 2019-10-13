const getDownloadRepo = require('../handlers/getDownloadRepo');
const runTest = require('../handlers/runTests');
const sendResult = require('../handlers/sendResult');

module.exports = class API {
  
  constructor() {
    this.agentStatus = 'waiting';
  }
  
  async downloadRepo(url, repositoryId, directoryPath) {
    await getDownloadRepo(url, repositoryId, directoryPath)
  }
  
  async sendResult(repositoryId, hash, command, start, end, result) {
    await sendResult(repositoryId, hash, command, start, end, result);
  }
  
  async runRepoTest(repositoryId, hash, command, directoryPath) {
    this.setStatus('working');
    const start = Date.now();
    const result = await runTest(repositoryId, hash, command, directoryPath);
    const end = Date.now();
    await this.sendResult(repositoryId, hash, command, start, end, result);
    this.setStatus('waiting');
  }
  
  setStatus(status) {
    this.agentStatus = status;
  }
  
};
