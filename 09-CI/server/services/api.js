const util = require('util');
const fs = require('fs');
const asyncWrite = util.promisify(fs.writeFile);
const asyncRead = util.promisify(fs.readFile);

module.exports = class API {
  
  constructor() {
    this.builds = [];
    this.agents = [];
    this.taskCounter = 0;
  }
  
  addAgent(host, port) {
    this.agents.push({
      host,
      port,
    });
    
    console.log(this.agents);
  }
  
  getAgents() {
    return this.agents;
  }
  
  setBuild(hash, command, url, repositoryId) {
    this.builds.push({
      repositoryId,
      hash,
      command,
      url
    })
  }
  
  async saveBuildResult(repositoryId, hash, command, start, end, result, status) {
    const builds = this.getAllBuilds();
    const index = builds.findIndex(item => item.repositoryId === repositoryId);
    const obj = {
      repositoryId,
      hash,
      command,
      start,
      end,
      result,
      status,
    };
    this.builds[index] = obj;
    asyncRead('./data.json', 'utf8', async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let existingObj = JSON.parse(data);
        existingObj.push(obj);
        let json = JSON.stringify(existingObj, null, 2);
        asyncWrite('./data.json', json, 'utf-8')
      }});
  }
  
  getAllBuilds() {
    return this.builds;
  }
  
  setTaskCounter() {
    this.taskCounter++;
  }
  
  removeTaskCounter() {
    this.taskCounter--;
  }
  
  getTaskCounter() {
    return this.taskCounter;
  }
  
  setOldBuilds(content) {
    this.builds = this.builds.concat(content);
  }
};
