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
  
  addTask(params) {
    const { hash, command } = params;
    
    const uniqueId = nanoid();
    
    this.tasks.push({
      id: uniqueId,
      address: '',
      hash,
      command,
      start: Date.now(),
      end: '',
      status: '',
    });
    
    return uniqueId;
  }
  
  getAllTasks() {
    return this.tasks;
  }
  
  saveBuildResult(id, address, hash, command, start, end, status) {
    const build = {
      id,
      address,
      hash,
      command,
      start,
      end,
      status,
    };
    this.builds.push(build)
  }
  
  getAllBuilds() {
    return this.builds;
  }
  
  
};
