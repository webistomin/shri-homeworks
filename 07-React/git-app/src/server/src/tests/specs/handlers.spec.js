const supertest = require('supertest');
const http = require('http');
const app = require('../../server');

describe('Git api', () => {
  let server;
  let request;
  
  const getRes = (response) => {
    return JSON.parse(response.text)
  };
  
  beforeAll(async (done) => {
    server = http.createServer(app);
    server.listen(done);
    request = supertest(server);
  });
  
  afterAll((done) => {
    server.close(done);
  });
  
  it('GET / - возвращает контент главной страницы', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
  
  it('GET * - возвращает 404 ошибку', async () => {
    const response = await request.get('/some-random-text');
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Такого API не существует!');
  });
  
  it('GET /api/repos/ - возвращает список гит-репозиториев', async () => {
    const response = await request.get('/api/repos/');
    expect(response.statusCode).toBe(200);
    expect(getRes(response)).toEqual({"git_repos": ["learn-unit-testing"]});
  });
  
  it('GET /api/repos/ - возвращает список гит-репозиториев', async () => {
    const response = await request.get('/api/repos/');
    expect(response.statusCode).toBe(200);
    expect(getRes(response)).toEqual({"git_repos": ["learn-unit-testing"]});
  });

  it('GET /api/repos/:repositoryId/ - возвращает список файлов в директории', async () => {
    const response = await request.get('/api/repos/learn-unit-testing/');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(getRes(response).files)).toBe(true);
  });

  it('GET /api/repos/:repositoryId/ - возвращает ошибку, если репозитория не существует', async () => {
    const response = await request.get('/api/repos/random-repository/');
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message.code).toBe("ENOENT");
  });

  it('GET /api/repos/:repositoryId/tree/commitHash/ - возвращает ошибку, если хэша коммита не существует', async () => {
    const response = await request.get('/api/repos/learn-unit-testing/tree/example/');
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message.code).toBe(128);
  });

  it('GET /api/repos/:repositoryId/commits/commitHash - возвращает ошибку, если коммита не существует', async () => {
    const response = await request.get('/api/repos/learn-unit-testing/commits/1');
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message.code).toBe(128);
  });

  it('GET /api/repos/:repositoryId/commits/commitHash - возвращает ошибку, если коммита не существует', async () => {
    const response = await request.get('/api/repos/learn-unit-testing/commits/1');
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message.code).toBe(128);
  });
  
  it('GET /api/repos/:repositoryId/commits/commitHash - возвращает список коммитов', async () => {
    const commit = '2fed1d3c1e641a84033f5e0a713e262dc089a582';
    
    const response = await request.get(`/api/repos/learn-unit-testing/commits/${commit}`);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(getRes(response).commits)).toBe(true);
  });
  
  it('GET /api/repos/:repositoryId/commits/commitHash - пагинация работает', async () => {
    const commit = '8c061de0796e6d2cc5e87eecfd80d325c6695860';
    
    const response = await request.get(`/api/repos/learn-unit-testing/commits/${commit}`)
      .query({ page: 0, paginateBy: 1 });
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(getRes(response).commits)).toEqual(true);
    expect((getRes(response).commits).length).toEqual(1);
  });
  
  it('GET /api/repos/:repositoryId/commits/:commitHash/diff - возвращает diff', async () => {
    const commit = '2fed1d3c1e641a84033f5e0a713e262dc089a582';
    
    const response = await request.get(`/api/repos/learn-unit-testing/commits/${commit}/diff`);
    expect(response.statusCode).toBe(200);
    expect(getRes(response).diff.length).not.toEqual(0)
  });
  
  it('GET /api/repos/:repositoryId/commits/:commitHash/diff - возвращает ошибку для дифа, если нет предыдщуего коммита', async () => {
    const commit = '8c061de0796e6d2cc5e87eecfd80d325c6695860';
    
    const response = await request.get(`/api/repos/learn-unit-testing/commits/${commit}/diff`);
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message.length).not.toEqual(0)
  });
  
  it('GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile([^/]*) - возвращает блоб', async () => {
    const commit = '2fed1d3c1e641a84033f5e0a713e262dc089a582';
    
    const response = await request.get(`/api/repos/learn-unit-testing/blob/${commit}/index.js`);
    expect(response.statusCode).toBe(200);
    expect(getRes(response).blob).toEqual('const a = 1;\n')
  });
  
  it('GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile([^/]*) - возвращает ошибку, если файла не существуент', async () => {
    const commit = '2fed1d3c1e641a84033f5e0a713e262dc089a582';
    
    const response = await request.get(`/api/repos/learn-unit-testing/blob/${commit}/index.html`);
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message.length).not.toEqual(0)
  });
  
  it('POST /api/repos/:repositoryId - выдаёт ошибку при скачивании, если репозиторий не существует', async () => {
    const response = await request.post('/api/repos/test')
      .send({url: 'https://github.com/webistomin/eslint-plugin-lodash-to-native1'});
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message).toEqual('Ошибка при скачивании репозитория.')
  });
  
  it('POST /api/repos/:repositoryId - скачивает репозиторий', async () => {
    const response = await request.post('/api/repos/test')
      .send({url: 'https://github.com/webistomin/eslint-plugin-lodash-to-native'});
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message).toEqual('Репозиторий test добавлен в рабочую директорию.')
  });
  
  it('POST /api/repos/:repositoryId - выдаёт ошибку при скачивании, если папка уже существует', async () => {
    const response = await request.post('/api/repos/test')
      .send({url: 'https://github.com/webistomin/eslint-plugin-lodash-to-native1'});
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message).toEqual('Репозиторий уже существует. Удалите его во избежание конфликта.')
  });
  
  it('DELETE /api/repos/:repositoryId - удаляет репозиторий', async () => {
    const response = await request.delete('/api/repos/test');
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message).toEqual('test удалён.')
  });
  
  it('DELETE /api/repos/:repositoryId - выдаёт ошибку при удалении, если репозитория не существует', async () => {
    const response = await request.delete('/api/repos/test1');
    expect(response.statusCode).toBe(200);
    expect(getRes(response).message).toEqual('Репозитория не существует')
  });
});
