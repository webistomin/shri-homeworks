const gulp = require('gulp');
const swPrecache = require('sw-precache');
const uglify = require('gulp-uglify-es').default;

const rootDir = 'build';

gulp.task('sw', () => {

  swPrecache.write('./build/service-worker.js', {
    staticFileGlobs: [`${rootDir}/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}`],
    stripPrefix: rootDir,
  });
  gulp.src('src/js/service-worker-register.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));

});
