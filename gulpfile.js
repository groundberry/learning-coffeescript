const gulp = require('gulp');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
// const lr = require('tiny-lr');
// const server = lr();

const jsSources = [
  'components/scripts/scriptOne.js',
  'components/scripts/scriptTwo.js',
];

const htmlSources = [
  'index.html',
];

gulp.task('js', () => {
  gulp.src(jsSources)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

gulp.task('html', () => {
  gulp.src(htmlSources)
    .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(jsSources, ['js']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('default', ['js', 'watch']);
