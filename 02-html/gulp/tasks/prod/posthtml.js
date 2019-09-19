const gulp = require('gulp');
const postHTML = require('gulp-posthtml');
const postHTMLBeautify = require('posthtml-beautify');
const postHTMLAlt = require('posthtml-alt-always');
const postHTMLAttrSorter = require('posthtml-attrs-sorter');
const postHTMLLinkNoRef = require('posthtml-link-noreferrer');
const postHTMLLazyLoad = require('posthtml-lazyload');

const config = () => ({
  plugins: [
    postHTMLBeautify({
      rules: {
        indent: 2,
        blankLines: false,
      },
    }),
    postHTMLAlt(),
    postHTMLAttrSorter(),
    postHTMLLinkNoRef(),
    postHTMLLazyLoad({
      loading: 'eager',
      class: 'lazy',
    }),
  ],
});

gulp.task('posthtml', () => gulp.src('./build/*.html')
  .pipe(postHTML(config))
  .pipe(gulp.dest('./build')));
