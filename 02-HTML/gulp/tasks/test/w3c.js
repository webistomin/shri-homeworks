const gulp = require('gulp');
const postHTML = require('gulp-posthtml');
const w3cValidator = require('posthtml-w3c');

const config = () => ({
  plugins: [
    w3cValidator(),
  ],
});

gulp.task('w3c:test', () => gulp.src('./build/*.html')
  .pipe(postHTML(config)));
