const axios = require('axios');
const util = require('util');
const fs = require('fs');
const asyncWrite = util.promisify(fs.writeFile);
const asyncRead = util.promisify(fs.readFile);
const wait = require('../utils/wait');
const config = require('../config');
const { hostPort } = config;

const sendResult = async (repositoryId, hash, command, start, end, result, status) => {
  const resultObj = {
    repositoryId,
    hash,
    command,
    start,
    end,
    result,
    status,
  };
  
  const sender = axios.post(
    `http://localhost:${hostPort}/notify_build_result`, resultObj)
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
    console.log('save result in data.json');
    await asyncRead('./data.json', 'utf8', async (err, data) => {
      if (err){
        console.log(err);
        process.exit(0);
      } else {
        let existingObj = JSON.parse(data);
        existingObj.push(resultObj);
        let json = JSON.stringify(existingObj, null, 2);
        await asyncWrite('./data.json', json, 'utf-8');
        process.exit(0);
      }});
  }
};

module.exports = sendResult;
