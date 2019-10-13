const express = require('express');
const axios = require('axios');
const yargs = require('yargs');
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
    .then((result) => {
      console.log(result.data);
      console.log(`Agent listening port: ${port}. Server host-port: ${hostPort}`)
    })
    .catch((error) => {
      console.log('Agent has been deleted.');
      console.log(error);
      agent.close(() => {
        process.exit(0);
      });
    })
});
