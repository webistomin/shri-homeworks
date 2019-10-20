const gulp = require('gulp');
const ghPages = require('gh-pages');
const path = require('path');
const htmlmin = require('gulp-html-minifier');

gulp.task('deploy', (done) => {
  ghPages.publish(path.join(process.cwd(), './src'), done);
});

gulp.task('minify', () => gulp.src('./src/index.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    quoteCharacter: "'",
    minifyCSS: true,
    minifyJS: true,
  }))
  .pipe(gulp.dest('./dist'))
);

