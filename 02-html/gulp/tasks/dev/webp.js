const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');
const extReplace = require('gulp-ext-replace');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('img:webp', () => gulp.src(['./build/img/**/*.+(jpg|jpeg|png)', '!./build/img/favicon/**/*.*'])
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {

      return {
        title: 'Webp',
        message: err.message,
      };

    }),
  }))
  .pipe(imagemin([
    imageminWebp({
      quality: 90,
    }),
  ]))
  .pipe(extReplace('.webp'))
  .pipe(gulp.dest('./build/img')));
