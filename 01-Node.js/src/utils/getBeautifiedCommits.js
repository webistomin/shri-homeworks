module.exports = getBeautifiedCommits = (array) => {
  let keys = ['short_commit', 'author', 'date', 'message'];
  return array.map(array => {
    let object = {};
    keys.forEach((key, i) => object[key] = array[i]);
    return object;
  })
};
