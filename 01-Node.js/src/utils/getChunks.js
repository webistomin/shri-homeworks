module.exports = getChunks = (arr, chunkSize = 1, cache = []) => {
  const temp = [...arr];
  if (chunkSize <= 0) {
    return cache;
  }
  while (temp.length) {
    cache.push(temp.splice(0, chunkSize));
  }
  return cache
};
