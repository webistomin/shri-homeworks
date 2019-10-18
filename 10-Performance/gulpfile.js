const gulp = require('gulp');
const ghPages = require('gh-pages');
const path = require('path');
const fixmyjs = require('gulp-fixmyjs');

gulp.task('deploy', (done) => {
  ghPages.publish(path.join(process.cwd(), './src'), done);
});

gulp.task('fixjs', () => gulp.src('./src/js/main.js')
  .pipe(fixmyjs({}))
  .pipe(gulp.dest("./src"))
);
