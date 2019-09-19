const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sass:build', () => gulp.src('./src/sass/main.sass')
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {

      return {
        title: 'Styles',
        message: err.message,
      };

    }),
  }))
  .pipe(sass())
  .pipe(gcmq())
  .pipe(rename({
    basename: 'style',
  }))
  .pipe(gulp.dest('./build/css'))
  .pipe(cleanCSS({ level: 2 }))
  .pipe(rename({
    basename: 'style',
    suffix: '.min',
  }))
  .pipe(gulp.dest('./build/css')));
