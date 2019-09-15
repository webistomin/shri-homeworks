const express = require('express');
const yargs = require('yargs');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const showBanner = require('node-banner');
const utils = require('./utils/utils');

const app = express();
app.listen(3000, () => {
  (async () => {
    await showBanner('SHRI 2019', 'Simple node.js git client. Server available on localhost:3000');
  })();
});
app.use(express.json());

const argv = yargs.argv;
const directoryPath = argv.path;

// return homepage
app.get('/', (req, res) => {
  res.end('Hello World!');
});

// get all repos inside folder
app.get('/api/repos/', (req, res) => {
  res.json({git_repos: utils.getAllFilesInsideFolder(directoryPath)});
});

// get array of commits
app.get('/api/repos/:repositoryId/commits/:commitHash/:page?', (req, res) => {
  const { repositoryId, commitHash } = req.params;
  const [ page, paginateBy ] = req.params.page ? req.params.page.split('-') : [];
  const command = `git checkout ${commitHash} --quiet && git log --pretty=format:"%h%x09%an%x09%ad%x09%s" --full-history`;
  const cwd = `${directoryPath}/${repositoryId}`;
  const isCommandValid = utils.isCommandValid(command, cwd);
  
  const getArrayOfCommits = () => {
    let result = cp.execSync(command, {cwd}, (err, stdout) => {
        if (err) {
          throw err;
        }
        return stdout;
    }).toString().replace(/(\r\n|\n|\r)/gm, "\t").split("\t");
    
    return utils.getBeautifiedCommits(utils.getChunks(result, 4));
  };
  
  if (isCommandValid) {
    if (+page) {
      if (page * paginateBy > Math.ceil((getArrayOfCommits().length + 1) / paginateBy) * paginateBy) {
        res.status(404).send(`
        Последняя страница: ${Math.ceil(getArrayOfCommits().length / paginateBy)}
        Всего коммитов: ${getArrayOfCommits().length}
        `);
      } else {
        res.json({commits: utils.getPaginatedData(getArrayOfCommits(), paginateBy, page)});
      }
    } else if (+page === 0) {
      res.status(404).send(`Первая страница: 1`);
    } else {
      res.json({commits: getArrayOfCommits()});
    }
  } else {
    res.status(404).send('Что-то пошло не так!');
  }
});

// get commit diff
app.get('/api/repos/:repositoryId/commits/:commitHash/diff', (req, res) => {
  const { repositoryId, commitHash } = req.params;
  const command = `git diff ${commitHash} ${commitHash}~`;
  const cwd = `${directoryPath}/${repositoryId}`;
  const isCommandValid = utils.isCommandValid(command, cwd);
  
  if (isCommandValid) {
    let result = cp.execSync(command, {cwd}, (err, stdout) => {
      if(err) {
        throw err;
      }
      return stdout;
    }).toString();
  
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(result)
  } else {
    res.status(404).send('Что-то пошло не так!');
  }
});

// get all files inside repo
app.get('/api/repos/:repositoryId/', (req, res) => {
  const { repositoryId, commitHash } = req.params;
  const dir = `${directoryPath}/${repositoryId}`;
  let result = [];
  
  if (fs.existsSync(dir)) {
    cp.execSync('git checkout master', {cwd: dir});
    const readDirSync = (dir) => {
      const files = fs.readdirSync(dir).map(file => path.posix.join(dir, file));
      files.forEach((file) => {
        result.push(file.slice(file.lastIndexOf('/') + 1 , file.length));
      });
      return result
    };
    res.json({files: readDirSync(dir)});
  } else {
    res.status(404).send(`
    Такого репозитория не существует!
    Доступны: ${utils.getAllFilesInsideFolder(directoryPath).join(', ')}`);
  }
});

// get all files inside repo by commit hash
app.get('/api/repos/:repositoryId/tree/:commitHash?/:path([^/]*)?', (req, res) => {
  const { repositoryId, commitHash, path } = req.params;
  let command = '';
  
  if (commitHash && path) {
    command = `git checkout ${commitHash} --quiet && cd ${path} && ls -A`;
  } else if (commitHash && !path) {
    command = `git checkout ${commitHash} --quiet && ls -A`;
  } else if (!commitHash && !path) {
    res.redirect(`/api/repos/${repositoryId}/`)
  }
  
  const cwd = `${directoryPath}/${repositoryId}`;
  const isCommandValid = utils.isCommandValid(command, cwd);
  
  if (isCommandValid) {
    let result = cp.execSync(command, {cwd}, (err, stdout) => {
      if (err) {
        throw err;
      }
      return stdout;
    }).toString().split("\n");
  
    res.json({files: result.filter((el) => el)});
  } else {
    res.redirect(`/api/repos/${repositoryId}/`)
  }
});

// get file text
app.get('/api/repos/:repositoryId/blob/:commitHash/:pathToFile([^/]*)', (req, res) => {
  const { repositoryId, commitHash, pathToFile } = req.params;
  const command = `git show ${commitHash}:${pathToFile}`;
  const cwd = `${directoryPath}/${repositoryId}`;
  const isCommandValid = utils.isCommandValid(command, cwd);
  
  if (isCommandValid) {
    const result = cp.execSync(command, {cwd}, (err, stdout) => {
        if (err) {
          throw err;
        }
        return stdout;
      });
  
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(result);
  } else {
    res.status(404).send('Что-то пошло не так!');
  }
});

// download repo
app.post('/api/repos/:repositoryId', (req, res) => {
  const { url } = req.body;
  const { repositoryId } = req.params;
  const command = `git clone ${url} ${repositoryId}`;
  const cwd = `${directoryPath}`;
  
  const isCommandValid = utils.isCommandValid(`git ls-remote ${url}`, cwd);
  
  if (fs.existsSync(path.posix.join(cwd, repositoryId))) {
    res.status(404).send('Репозиторий уже существует. Удалите его во избежание конфликта.');
  } else if (isCommandValid) {
    cp.execSync(command, {cwd}, (err, stdout) => {
      if (err) {
        throw err;
      }
      return stdout;
    });
  
    res.json({message: `Репозиторий ${repositoryId} добавлен в рабочую директорию.`});
  } else {
    res.status(404).send('Что-то пошло не так!');
  }
});

// delete repo by id
app.delete('/api/repos/:repositoryId',  (req, res) => {
  const { repositoryId } = req.params;
  const reposPath = `${directoryPath}/${repositoryId}`;
  
  if (fs.existsSync(reposPath)) {
    utils.deleteFolderRecursive(reposPath);
    res.json({message: 'successfully deleted ' + repositoryId});
  } else {
    res.status(404).send(`Репозитория ${repositoryId} не существует.`);
  }
});

app.get('*', (req, res) => {
  res.status(404).send('Такого API не существует!');
});
