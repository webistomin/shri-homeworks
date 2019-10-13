const axios = require('axios');
const config = require('../config');
const { hostPort } = config;

const sendResult = (repositoryId, hash, command, start, end, result, status) => {
  axios.post(
    `http://localhost:${hostPort}/notify_build_result`, {
      repositoryId,
      hash,
      command,
      start,
      end,
      result,
      status,
    })
    .then(() => {
      console.log('Отправил результат теста');
    });
};

module.exports = sendResult;
