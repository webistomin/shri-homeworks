const gulp = require('gulp');
const del = require('del');

gulp.task('clean:build', () => del('./build'));
