const getBeautifiedCommits = (array: Array<string>) => {
  let keys = ['short_commit', 'author', 'date', 'message'];
  return array.map(array => {
    let object: { [key: string]: string } = {};
    keys.forEach((key, i) => object[key] = array[i]);
    return object;
  })
};

module.exports = getBeautifiedCommits;
