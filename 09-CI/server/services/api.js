const nanoid = require('nanoid');

module.exports = class API {
  
  constructor() {
    this.builds = [];
    this.agents = [];
    this.tasks = [];
  }
  
  addAgent(host, port) {
    this.agents.push({
      host,
      port,
    });
    
    console.log(this.agents);
  }
  
  getAllTasks() {
    return this.tasks;
  }
  
  setBuild(hash, command, url, repositoryId) {
    this.builds.push({
      repositoryId,
      hash,
      command,
      url
    })
  }
  
  saveBuildResult(repositoryId, hash, command, start, end, result, status) {
    const builds = this.getAllBuilds();
    const index = builds.findIndex(item => item.repositoryId === repositoryId);
    this.builds[index] = {
      repositoryId,
      hash,
      command,
      start,
      end,
      result,
      status,
    };
  }
  
  getAllBuilds() {
    return this.builds;
  }
  
  
};
