const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('pug', () => gulp.src('./src/views/pages/**/*.pug')
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {

      return {
        title: 'Pug',
        message: err.message,
      };

    }),
  }))
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.stream()));
