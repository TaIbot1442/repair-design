const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
 
gulp.task('gulp-cssmin', function () {
    return gulp.src('./src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./src/'));
});

function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;