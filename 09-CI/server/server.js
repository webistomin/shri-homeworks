const express = require('express');
const API = require('./services/api');
const bodyParser = require('body-parser');
const axios = require('axios');
const nanoid = require('nanoid');
const config = require('./config');
const agentConfig = require('../agent/config');

const { port, repo } = config;
const { port: agentPort } = agentConfig;
const app = express();
const CI = new API();
const urlencodedParser = bodyParser.urlencoded({ extended: false , limit: '50mb'});
app.use(express.json({limit: '50mb'}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const builds = CI.getAllBuilds();
  const taskCounter = CI.getTaskCounter();
  const disabled = taskCounter >= 5;
  
  res.render('index.ejs', {
    builds,
    disabled,
  });
});

app.post('/register', urlencodedParser, async (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  
  const { hash, command } = req.body;
  const url = config.repo;
  const repositoryId = nanoid();
  const builds = CI.getAllBuilds();
  CI.setTaskCounter();
  
  const taskCounter = CI.getTaskCounter();
  
  if (taskCounter <= 5) {
    CI.setBuild(hash, command, url, repositoryId);
  
    await axios.post(`http://localhost:${agentPort}/build`, {
      hash,
      command,
      url,
      repositoryId,
    })
      .then((result) => {
        console.log(result.data);
        res.redirect('/');
      })
      .catch((error) => {
        CI.removeTaskCounter();
        res.redirect('/');
      });
  } else {
    res.render('index.ejs', {
      builds,
      disabled: true,
    });
  }
});

app.get('/build/:id?', (req, res) => {
  const { id } = req.params;
  const builds = CI.getAllBuilds();
  
  const index = builds.findIndex(item => item.repositoryId === id);
  
  if (index !== -1) {
    const { repositoryId, hash, command, start, end, result, status } = builds[index];
    
    res.render('build.ejs', {
      repositoryId,
      hash,
      command,
      start,
      end,
      result,
      status
    });
  } else {
    res.json({message: 'id not found'})
  }
});

app.post('/notify_agent', (req, res) => {
  CI.addAgent(req.body.host, req.body.port);
  
  res.json({
    message: 'Agent added'
  })
});

app.post('/notify_build_result', (req, res) => {
  console.log('Save build result:');
  const { repositoryId, hash, command, start, end, result, status } = req.body;
  CI.saveBuildResult(repositoryId, hash, command, start, end, result, status);
  CI.removeTaskCounter();
  res.json({ message: 'successfully save build' })
});

app.listen(port, () => {
  console.log(`Listening port: ${port}. Repository CI: ${repo}`)
});
