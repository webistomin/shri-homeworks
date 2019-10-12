const getChunks = (arr: Array<string>, chunkSize: number = 1, cache: Array<string[]> = []) => {
  const temp = [...arr];
  if (chunkSize <= 0) {
    return cache;
  }
  while (temp.length) {
    cache.push(temp.splice(0, chunkSize));
  }
  return cache
};

module.exports = getChunks;
