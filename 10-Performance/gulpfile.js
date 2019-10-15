const gulp = require('gulp');
const ghPages = require('gh-pages');
const path = require('path');

gulp.task('deploy', (done) => {
  ghPages.publish(path.join(process.cwd(), './src'), done);
});
