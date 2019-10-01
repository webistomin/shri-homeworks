const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');

const config = {
  mode: {
    symbol: {
      dest: '.',
      sprite: './sprite.svg',
    },
  },
};

gulp.task('svg:sprite', () => gulp.src('./build/img/icons/*.svg')
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {
      return {
        title: 'Svg sprite',
        message: err.message,
      };
    }),
  }))
  .pipe(svgSprite(config))
  .pipe(gulp.dest('./build/img/icons')));
