const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');
global.tasker = require('gulp-tasker');

tasker.loadTasks({
  path: '/gulp/tasks',
  recurse: true,
});

gulp.task('dev', (callback) => {

  runSequence(
    'clean:build',
    ['sass', 'pug', 'copy:js:libs', 'copy:js:custom', 'copy:img', 'copy:fonts'],
    'svg:sprite',
    'img:resize',
    'img:webp',
    'server',
    'typograf',
    callback,
  );

});

gulp.task('build', (callback) => {

  runSequence(
    'clean:build',
    ['sass:build', 'pug', 'js:build:libs', 'js:build:custom', 'img:build', 'copy:fonts'],
    'svg:sprite',
    'img:resize',
    'img:webp',
    'postcss',
    'posthtml',
    // 'generate-favicon',
    // 'inject-favicon-markups',
    'typograf',
    callback,
  );

});
