const gulp = require('gulp');
const typograf = require('gulp-typograf');

gulp.task('typograf', () => gulp.src('./build/*.html')
  .pipe(typograf({
    locale: ['ru', 'en-US'],
    htmlEntity: { type: 'name' },
    disableRule: ['ru/optalign/*'],
    enableRule: ['ru/money/ruble'],
    safeTags: [
      ['<\\?php', '\\?>'],
      ['<no-typography>', '</no-typography>'],
    ],
  }))
  .pipe(gulp.dest('./build')));
