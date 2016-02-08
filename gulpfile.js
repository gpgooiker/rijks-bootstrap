// Include gulp and gulp plugins
var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  ugilifyCss = require('gulp-uglifycss'),
  rename = require('gulp-rename');

var bootstrapDist = './bower_components/bootstrap/dist/',
  hoverIntentDist = './bower_components/superfish/dist/';

var paths = {
  fonts: {
    glyphicon: bootstrapDist + 'fonts/*.*'
  },
  js: [
    './bower_components/jquery/dist/jquery.js',
    hoverIntentDist + 'js/hoverIntent.js',
    hoverIntentDist + 'js/superfish.js',
    bootstrapDist + 'js/bootstrap.js',
    'src/js/initializeHoverIntent.js'
  ]
};

// Compile LESS to css and provide a minified version
gulp.task('less', function () {
  gulp.src('src/less/rijks-bootstrap.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(rename('rijks-bootstrap.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename('rijks-bootstrap.min.css'))
    .pipe(ugilifyCss())
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & minify Javascript
gulp.task('js', function () {
  return gulp.src(paths.js)
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
  gulp.src(paths.fonts.glyphicon, { base: bootstrapDist + 'fonts' })
    .pipe(gulp.dest('./dist/fonts/glyphicons'));
});

gulp.task('default', ['less', 'js', 'move-fonts', 'watch']);
gulp.task('build', ['less', 'js', 'move-fonts']);