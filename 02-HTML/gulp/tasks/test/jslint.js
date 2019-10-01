const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('js:lint', () => (
  gulp.src(['src/js/**/*.js', '!src/js/lib/**/*.js', '!src/js/service-worker-register.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));
