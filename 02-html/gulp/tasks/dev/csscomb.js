const gulp = require('gulp');
const csscomb = require('gulp-csscomb');

gulp.task('csscomb', () => {
  return gulp.src('src/sass/blocks/*.sass')
    .pipe(csscomb(require('../../../.csscomb.json')))
    .pipe(gulp.dest('src/sass/blocks'));
});
