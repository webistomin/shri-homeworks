const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');

gulp.task('img:build', () => gulp.src('src/img/**/*.+(jpg|jpeg|gif|png|webp|svg)')
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {
      return {
        title: 'Images',
        message: err.message,
      };
    }),
  }))
  .pipe(imagemin([
    imagemin.gifsicle({ interlaced: true }),
    imagemin.jpegtran({ progressive: true }),
    imagemin.optipng({ optimizationLevel: 1 }),
    imagemin.svgo({
      plugins: [
        {
          removeAttrs: { attrs: 'data.*' },
          removeComments: true,
          removeTitle: true,
          removeDoctype: true,
          removeXMLProcInst: true,
          removeMetadata: true,
          removeEditorsNSData: true,
          minifyStyles: true,
          convertStyleToAttrs: true,
          cleanupIDs: true,
          removeUnknownsAndDefaults: true,
          removeUselessStrokeAndFill: true,
          removeHiddenElems: true,
          mergePaths: true,
          collapseGroups: true,
          convertTransform: true,
          convertShapeToPath: true,
          removeEmptyContainers: true,
          removeEmptyText: true,
        },
      ],
    }),
  ]))
  .pipe(gulp.dest('./build/img')));
