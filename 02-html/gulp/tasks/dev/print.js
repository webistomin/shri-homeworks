const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('print:css', () => gulp.src('./src/sass/global/print.sass')
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {

      return {
        title: 'Styles',
        message: err.message,
      };

    }),
  }))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(gcmq())
  .pipe(sourcemaps.write())
  .pipe(rename({
    basename: 'print',
  }))
  .pipe(gulp.dest('./build/css'))
  .pipe(cleanCSS({ level: 2 }))
  .pipe(rename({
    basename: 'print',
    suffix: '.min',
  }))
  .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream()));
