const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');
const psi = require('psi');

const site = '';

gulp.task('psi:mobile', () => psi.output(site, {
  nokey: true,
  strategy: 'mobile',
}));

gulp.task('psi:desktop', () => psi.output(site, {
  nokey: true,
  strategy: 'desktop',
}));

gulp.task('psi:test', () => {

  runSequence('psi:mobile', 'psi:desktop');

});
