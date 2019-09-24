const express = require('express');
const yargs = require('yargs');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const showBanner = require('node-banner');
const utils = require('./utils/utils');
const util = require('util');
const rimraf = require('rimraf');
const asyncFsStat = util.promisify(fs.stat);
const asyncExec = util.promisify(cp.exec);

const app = express();
app.listen(3000, () => {
  (async() => {
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
app.get('/api/repos/', async (req, res) => {
  res.json(await utils.getAllFilesInsideFolder(directoryPath));
});

// get array of commits
app.get('/api/repos/:repositoryId/commits/:commitHash', async (req, res) => {
  const { repositoryId, commitHash } = req.params;
  const { page, paginateBy } = req.query;
  const command = `git log ${commitHash} --pretty=format:"%h%x09%an%x09%ad%x09%s" --full-history --quiet`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    let { stdout } = await asyncExec(command, { cwd });
    let stringOfCommits = stdout.toString().replace(/(\r\n|\n|\r)/gm, '\t').split('\t');
    let getChunkedArray = utils.getBeautifiedCommits(utils.getChunks(stringOfCommits, 4));
    res.json({ commits: getChunkedArray });
  } catch (error) {
    res.send({ message: error.stderr });
  }
  
  
  
  //
  // if (isCommandValid) {
  //   if (+page) {
  //     if (page * paginateBy > Math.ceil((getArrayOfCommits().length + 1) / paginateBy) * paginateBy) {
  //       res.status(404)
  //         .send(`
  //       Последняя страница: ${Math.ceil(getArrayOfCommits().length / paginateBy)}
  //       Всего коммитов: ${getArrayOfCommits().length}
  //       `);
  //     } else {
  //       res.json({ commits: utils.getPaginatedData(getArrayOfCommits(), paginateBy, page) });
  //     }
  //   } else if (+page === 0) {
  //     res.status(404)
  //       .send(`Первая страница: 1`);
  //   } else {
  //     res.json({ commits: getArrayOfCommits() });
  //   }
  // } else {
  //   res.status(404)
  //     .send('Что-то пошло не так!');
  // }
});

// get commit diff
app.get('/api/repos/:repositoryId/commits/:commitHash/diff', async (req, res) => {
  const { repositoryId, commitHash } = req.params;
  const command = `git diff ${commitHash} ${commitHash}~`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    const { stdout } = await asyncExec(command, { cwd });
    const stringResult = stdout.toString();
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(stringResult);
  } catch (error) {
    res.send({ message: error.stderr });
  }
});

// get all files inside repo by commit hash
app.get(['/api/repos/:repositoryId/', '/api/repos/:repositoryId/tree/:commitHash?/:path([^/]*)?'], async (req, res) => {
  const { repositoryId, commitHash, path } = req.params;
  const fsPath = require('path');
  const cwd = fsPath.resolve(directoryPath, repositoryId);
  let command = null;
  
  if (commitHash && path) {
    command = `git ls-tree ${commitHash} ${path} --name-only -r`;
  } else if (commitHash && !path) {
    command = `git ls-tree ${commitHash} --name-only -r`;
  } else if (!commitHash && !path) {
    command = 'git ls-tree master --name-only -r';
  }
  
  try {
    const { stdout } = await asyncExec(command, { cwd });
    const allFiles = stdout.toString().split('\n');
    const allFilesFormatted = allFiles.filter((el) => el);
    res.json({ files: allFilesFormatted });
  } catch (error) {
    res.json({ message: error.stderr });
  }
});

// get file text
app.get('/api/repos/:repositoryId/blob/:commitHash/:pathToFile([^/]*)', async (req, res) => {
  const { repositoryId, commitHash, pathToFile } = req.params;
  const command = `git show ${commitHash}:${pathToFile}`;
  const cwd = path.resolve(directoryPath, repositoryId);
  
  try {
    const { stdout } = await asyncExec(command, { cwd });
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(stdout);
  } catch (error) {
    res.json({ message: error.stderr });
  }
});

// download repo
app.post('/api/repos/:repositoryId', async(req, res) => {
  const { url } = req.body;
  const { repositoryId } = req.params;
  const command = `git clone ${url} ${repositoryId}`;
  const cwd = `${directoryPath}`;
  let isRepositoryExist = false;
  
  try {
    let result = await asyncFsStat(path.resolve(cwd, repositoryId));
    isRepositoryExist = result.isDirectory();
  } catch (error) {}
  
  if (isRepositoryExist) {
    res.json({ message: 'Репозиторий уже существует. Удалите его во избежание конфликта.' });
  } else {
    try {
      await asyncExec(command, { cwd });
      res.json({ message: `Репозиторий ${repositoryId} добавлен в рабочую директорию.` });
    } catch (error) {
      res.json({ message: 'Ошибка при скачивании репозитория.' });
    }
  }
});

// delete repo by id
app.delete('/api/repos/:repositoryId', async(req, res) => {
  const { repositoryId } = req.params;
  const reposPath = path.resolve(directoryPath, repositoryId);
  
  try {
    await asyncFsStat(reposPath);
    rimraf(reposPath, () => {
      res.json({ message: `${repositoryId} удалён.`  });
    });
  } catch (error) {
    res.status(404).json({ message: `${error.code}: ${repositoryId} не найден.` });
  }
});

app.get('*', (req, res) => {
  res.status(404)
    .send('Такого API не существует!');
});
