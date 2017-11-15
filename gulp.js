var gulp = require('gulp');
// var pug = require('gulp-pug');
var sass = require('gulp-sass');
var pump = require('pump');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('images', function() {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('public/images'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
        .pipe(gulp.dest('./public'));
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src('src/fonts/*.{eot,svg,ttf,woff,woff2}')
      .pipe(gulp.dest('./public/fonts'));
});

/* Compile the source code for pug files */

// gulp.task('pug', function() {
//     return gulp.src('src/views/*.pug')
//        .pipe(pug({
//         pretty: true
//      }))
//        .pipe(gulp.dest('./public'))
// });

/* Compile Sass Files */

gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});

gulp.task('default', ['sass', 'images', 'scripts', 'fonts'], function() {
});
