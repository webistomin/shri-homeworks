const path = require('path');
const getAllFilesInsideFolder = require('../../utils/getAllFilesInsideFolder.js');
const getChunks = require('../../utils/getChunks.js');

describe('Utils', () => {
  it('getAllFilesInsideFolder - Выводит все файлы в директории', async () => {
    const dirPath = path.resolve('./', 'src/tests/test-repos');
    const result = await getAllFilesInsideFolder(dirPath);
    expect(result.git_repos.length).not.toEqual(0);
  });
  
  it('getAllFilesInsideFolder - выводит ошибку, если передан путь не директории', async () => {
    const dirPath = path.resolve(__dirname);
    const result = await getAllFilesInsideFolder(dirPath);
    expect(result.message.length).not.toEqual(0);
  });
  
  it('getChunks - возвращает пустой массив, если размер чанков меньше или равен 0', async () => {
    const testArray = [1,2,3,4,5,6,7,8,9,10];
    const result = await getChunks(testArray, 0);
    expect(result.length).toEqual(0);
  });
  
  it('getChunks - по умолчанию разбивает по одному элементу', async () => {
    const testArray = [1,2];
    const result = await getChunks(testArray);
    expect(result.length).toEqual(2);
  });
});
