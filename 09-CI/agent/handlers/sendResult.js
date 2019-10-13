const axios = require('axios');
const config = require('../config');
const { hostPort } = config;

const sendResult = (repositoryId, hash, command, start, end, result) => {
  axios.post(
    `http://localhost:${hostPort}/notify_build_result`, {
      repositoryId,
      hash,
      command,
      start,
      end,
      result,
    });
};

module.exports = sendResult;
