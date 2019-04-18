const gulp = require('gulp');
const $    = require('gulp-load-plugins')();
const rename = require('gulp-rename');


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
        .pipe(rename('common.css'))
        .pipe(gulp.dest('styles/'));

            /*.pipe(gulp.dest('styles/')))*/
});

        // .pipe(gulpfile.dest('D://OpenServer//domains//cabinet.ssu//public//css'))
        // .pipe($g.sass({
        //     includePaths: sassPaths,
        //     outputStyle: 'compressed' // if css compressed **file size**
        // })
        //     .on('error', $.sass.logError))
        // .pipe($.autoprefixer({
        //     browsers: ['last 2 versions', 'ie >= 9']
        // }))
        //.pipe(rename('cabinet.min.css'))
        // .pipe(gulpfile.dest('css'))
        // .pipe(gulpfile.dest('D://OpenServer//domains//cabinet.ssu//public//css'));



//
// gulpfile.task('default', ['sass'], function() {
//     gulpfile.watch(['scss/**/*.scss'], ['sass']);
// });


