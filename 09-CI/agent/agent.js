const express = require('express');
const axios = require('axios');
const yargs = require('yargs');
const argv = yargs.argv;
const config = require('./config');

const { port, hostPort } = config;
const directoryPath = argv.path;

const app = express();
app.use(express.json());

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
