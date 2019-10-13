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
  const tasks = CI.getAllTasks();
  
  res.render('index.ejs', {
    tasks
  });
});

app.post('/register', urlencodedParser, async (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  
  // CI.addTask(req.body);
  
  const { hash, command } = req.body;
  const url = config.repo;
  const repositoryId = nanoid();
  
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
  
  res.render('build.ejs', {
    id,
  });
});

app.post('/notify_agent', (req, res) => {
  CI.addAgent(req.body.host, req.body.port);
  
  res.json({
    message: 'Agent added'
  })
});

app.post('/notify_build_result', (req, res) => {
  console.log(req.body);
  const { repositoryId, hash, command, start, end, result } = req.body;
  CI.saveBuildResult(repositoryId, hash, command, start, end, result);
  // console.log(CI.getAllBuilds());
  res.json({ status: 'success' })
});

app.listen(port, () => {
  console.log(`Listening port: ${port}. Repository CI: ${repo}`)
});
