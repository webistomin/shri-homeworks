const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', () => {

  browserSync.init({
    server: { baseDir: './build/' },
  });

  gulp.watch('src/views/**/*.*', gulp.series(['pug']));
  gulp.watch('src/sass/**/*.sass', gulp.series(['sass']));
  gulp.watch('src/js/**/*.js', gulp.series(['copy:js:custom'], ['copy:js:libs']));
  gulp.watch('src/img/**/*.*', gulp.series(['copy:img']));
  gulp.watch('src/img/icons/*.*', gulp.series(['svg:sprite']));

});
