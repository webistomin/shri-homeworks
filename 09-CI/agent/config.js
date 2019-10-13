const hostConfig = require('../server/config');

module.exports =  {
  port: '8080',
  hostPort: hostConfig.port,
};
