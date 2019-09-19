const gulp = require('gulp');
const pugLinter = require('gulp-pug-linter');

gulp.task('pug:lint', () => (
  gulp
    .src('./src/views/**/*.pug')
    .pipe(pugLinter({ reporter: 'default' }))
));
