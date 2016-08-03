var autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('sass',function() {
  return gulp.src('./src/sass/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(cleancss())
  .pipe(rename('style.css'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
