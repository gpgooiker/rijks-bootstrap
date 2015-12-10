// Include gulp and gulp plugins
var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

var fonts = {
  glyphicon: [
    './bower_components/bootstrap/fonts/*.*'
  ]
};

// Compile LESS
gulp.task('less', function () {
  gulp.src('src/less/rijks-bootstrap.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(rename('rijks-bootstrap.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename('rijks-bootstrap.min.css'))
    .pipe(uglify())
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

// Move fonts to dist
gulp.task('move-fonts', function () {
  gulp.src(fonts.glyphicon, { base: './bower_components/bootstrap/fonts' })
    .pipe(gulp.dest('./dist/fonts/glyphicons'));
});

gulp.task('default', ['less', 'js', 'move-fonts', 'watch']);