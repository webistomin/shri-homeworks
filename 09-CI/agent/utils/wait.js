const wait = async(ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = wait;
