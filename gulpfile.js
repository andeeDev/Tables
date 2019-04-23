const gulp = require('gulp');
const $    = require('gulp-load-plugins')();
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
var sassPaths = [
    'sass/'
];

gulp.task('sass', function() {
    console.log("hi");
    return gulp.src('sass/*.scss')
            .pipe($.sass({
                outputStyle: 'expanded'
            }))
        .pipe(gulp.dest('styles/'))
        .pipe(concat('common.css'))
        .pipe(gulp.dest('styles/'));
});
gulp.task('stream', function () {
    // Endless stream mode
    gulp.watch('sass/**/*.scss', gulp.parallel('sass'));

});
