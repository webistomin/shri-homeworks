const express = require('express');
const API = require('./services/api');
const bodyParser = require('body-parser');
const axios = require('axios');
const nanoid = require('nanoid');
const config = require('./config');

const { port, repo } = config;
const app = express();
const CI = new API();
const urlencodedParser = bodyParser.urlencoded({ extended: false , limit: '50mb'});
app.use(express.json({limit: '50mb'}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const builds = CI.getAllBuilds();
  
  res.render('index.ejs', {
    builds
  });
});

app.post('/register', urlencodedParser, async (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  
  const { hash, command } = req.body;
  const url = config.repo;
  const repositoryId = nanoid();
  
  CI.setBuild(hash, command, url, repositoryId);
  
  await axios.post('http://localhost:8080/build', {
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
      res.redirect('/');
    });
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
  console.log('Сохраняю результат билда');
  const { repositoryId, hash, command, start, end, result, status } = req.body;
  CI.saveBuildResult(repositoryId, hash, command, start, end, result, status);
  res.json({ status: 'success' })
});

app.listen(port, () => {
  console.log(`Listening port: ${port}. Repository CI: ${repo}`)
});
