const gulp = require('gulp');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

function launchChromeAndRunLighthouse(url, flags, config = null) {

  return chromeLauncher.launch().then((chrome) => {

    flags.port = chrome.port;
    return lighthouse(url, flags, config).then(results => chrome.kill().then(() => results));

  });

}

const handleOk = function(results) {

  console.log(results);
  return results;

};

const handleError = function(e) {

  console.error(e);
  throw e;

};

const flags = {};

gulp.task('lighthouse', function() {

  const config = { settings: { onlyCategories: ['performance'] } };
  return launchChromeAndRunLighthouse('http://localhost:3000/', flags, config)
    .then(handleOk)
    .catch(handleError);

});
