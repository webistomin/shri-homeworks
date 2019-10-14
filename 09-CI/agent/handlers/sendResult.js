const axios = require('axios');
const wait = require('../utils/wait');
const config = require('../config');
const { hostPort } = config;

const sendResult = async (repositoryId, hash, command, start, end, result, status) => {
  const sender = axios.post(
    `http://localhost:${hostPort}/notify_build_result`, {
      repositoryId,
      hash,
      command,
      start,
      end,
      result,
      status,
    })
    .then((result) => {
      console.log('Отправил результат теста');
      return result.data;
    })
    .catch((error) => {
      console.log(error.code);
      return error;
    });
  
  let res = await sender;
  
  let tryCount = 0;
  while (res.message !== 'successfully save build' && tryCount < 5) {
    console.log('trying to send result');
    await wait(100);
    res = await sender;
    tryCount++;
  }
  
  if (tryCount === 5) {
    process.exit(0);
  }
};

module.exports = sendResult;
