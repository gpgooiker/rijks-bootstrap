// Include gulp and gulp plugins
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile LESS
gulp.task('less', function () {
  gulp.src('src/less/rijks-bootstrap.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(rename('rijks-bootstrap.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & minify Javascript
gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('rijks-bootstrap.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename('rijks-bootstrap.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Watch LESS files for changes
gulp.task('watch', function () {
  gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default', ['less', 'js']);