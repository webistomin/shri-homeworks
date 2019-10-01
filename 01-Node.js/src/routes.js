const express = require('express');
const yargs = require('yargs');
const argv = yargs.argv;
const router = express.Router();

const getAllRepoFiles = require('./handlers/getAllRepoFiles');
const getCommits = require('./handlers/getCommits');
const getDiff = require('./handlers/getDiff');
const getAllFilesByCommit = require('./handlers/getAllFilesByCommit');
const getBlob = require('./handlers/getBlob');
const getDownloadRepo = require('./handlers/getDownloadRepo');
const deleteRepo = require('./handlers/deleteRepo');

const directoryPath = argv.path;

// return homepage
router.get('/', async (req, res) => {
  res.end('Hello World!');
});

// get all repos inside folder
router.get('/api/repos/', async (req, res) => {
  res.json(await getAllRepoFiles(directoryPath));
});

// get array of commits
router.get('/api/repos/:repositoryId/commits/:commitHash', async (req, res) => {
  const { repositoryId, commitHash } = req.params;
  const { page, paginateBy } = req.query;
  
  const result = await getCommits({
    repositoryId,
    commitHash,
    page,
    paginateBy,
    directoryPath
  });
  
  res.json(result);
});

// get commit diff
router.get('/api/repos/:repositoryId/commits/:commitHash/diff', async (req, res) => {
  const { repositoryId, commitHash } = req.params;
  
  const result = await getDiff({
    repositoryId,
    commitHash,
    directoryPath
  });
  
  res.json(result);
});

// get all files inside repo by commit hash
router.get(['/api/repos/:repositoryId/', '/api/repos/:repositoryId/tree/:commitHash?/:path([^/]*)?'], async (req, res) => {
  const { repositoryId, commitHash, path } = req.params;
  
  const result = await getAllFilesByCommit({
    repositoryId,
    commitHash,
    path,
    directoryPath
  });
  
  res.json(result)
});

// get blob
router.get('/api/repos/:repositoryId/blob/:commitHash/:pathToFile([^/]*)', async (req, res) => {
  const { repositoryId, commitHash, pathToFile } = req.params;
  
  const result = await getBlob({
    repositoryId,
    commitHash,
    pathToFile,
    directoryPath,
  });
  
  if (!result.message) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(result);
  } else {
    res.json(result);
  }
});

// download repo
router.post('/api/repos/:repositoryId', async(req, res) => {
  const { url } = req.body;
  const { repositoryId } = req.params;
  
  const result = await getDownloadRepo({
    url,
    repositoryId,
    directoryPath
  });
  
  res.json(result);
});

// delete repo
router.delete('/api/repos/:repositoryId', async(req, res) => {
  const { repositoryId } = req.params;
  
  const result = await deleteRepo({
    repositoryId,
    directoryPath
  });
  
  res.json(result);
});

// 404
router.get('*', async (req, res) => {
  res.status(404).send('Такого API не существует!');
});

module.exports = router;
