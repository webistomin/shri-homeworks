const express = require('express');
const axios = require('axios');
const yargs = require('yargs');
const util = require('util');
const fs = require('fs');
const asyncWrite = util.promisify(fs.writeFile);
const asyncRead = util.promisify(fs.readFile);
const argv = yargs.argv;
const config = require('./config');
const API = require('./services/api');

const { port, hostPort } = config;
const directoryPath = argv.path;
const Agent = new API();

const app = express();
app.use(express.json({limit: '50mb'}));

app.post('/build', async (req, res) => {
  const { hash, command, url, repositoryId } = req.body;
  
  res.json({message: 'succesfully add task'});
  
  await Agent.downloadRepo(url, repositoryId, directoryPath)
    .then(() => {
      Agent.runRepoTest(repositoryId, hash, command, directoryPath);
    });
});

const agent = app.listen(port, async () => {
  await axios.post(
    `http://localhost:${hostPort}/notify_agent`, {
      host: `http://localhost:${port}/`,
      port,
    })
    .then(async (result) => {
      console.log(result.data);
      console.log(`Agent listening port: ${port}. Server host-port: ${hostPort}`);
  
      await asyncRead('./data.json', 'utf8', async (err, data) => {
        if (err){
          console.log(err);
          process.exit(0);
        } else {
          let existingData = JSON.parse(data);
          if (existingData.length !== 0) {
            await axios.post(`http://localhost:${hostPort}/initial_data`, {data: existingData})
              .then(async () => {
                await asyncWrite('./data.json', JSON.stringify([]), 'utf-8');
              })
              .catch(() => {
                console.log('error while sending initial data')
              });
          }
        }});
      
    })
    .catch((error) => {
      console.log('Agent has been deleted.');
      console.log(`Reason: ${error.code}`);
      agent.close(() => {
        process.exit(0);
      });
    })
});
