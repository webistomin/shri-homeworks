const express = require('express');
const API = require('./services/api');
const bodyParser = require('body-parser');
const config = require('./config');

const { port, repo } = config;
const app = express();
const CI = new API();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const tasks = CI.getAllTasks();
  
  res.render('index.ejs', {
    tasks
  });
});

app.post('/register', urlencodedParser, (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  CI.addTask(req.body);
  
  res.redirect('/');
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
  // API.saveBuildResult(req.body);
  
  res.json({ status: 'success' })
});

app.listen(port, () => {
  console.log(`Listening port: ${port}. Repository CI: ${repo}`)
});
