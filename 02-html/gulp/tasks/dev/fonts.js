const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('copy:fonts', () => gulp.src('src/fonts/**/*.{woff,woff2}')
  .pipe(gulp.dest('build/fonts'))
  .pipe(browserSync.stream()));
