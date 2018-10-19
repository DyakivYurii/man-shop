'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      browserSync = require('browser-sync'),
      del = require('del'),
      minify = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      mqpacker  = require('css-mqpacker'),
      rollup = require('gulp-better-rollup'),
      sourcemaps = require('gulp-sourcemaps'),
      imagemin = require('gulp-imagemin'),
      wait = require('gulp-wait');

gulp.task('style', function() {
    gulp.src('src/sass/style.scss')
        .pipe(plumber())
        .pipe(wait(25))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                browsers: [
                'last 1 version',
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Opera versions',
                'last 2 Edge versions'
                ]
            }),
            mqpacker({sort: true})
        ]))
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('clean', function() {
    return del.sync('app/');
});

gulp.task('copy-html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
});

gulp.task('es-module', function () {
    return gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(rollup({}, 'iife'))
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest('app/js'));
});

gulp.task('copy-fonts-images', function () {
    return gulp.src([
        'src/fonts/**/*.{woff,woff2}',
        'src/img/*.*'
    ], {base: 'src'})
        .pipe(gulp.dest('./app'));
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './app'
        },
        notify: false,
        open: true,
        ui: false
    });
});

gulp.task('optimize-img', function() {
});


gulp.task('start', ['assemble', 'server'], function() {
    gulp.watch('src/sass/**/*.+(scss|sass)', ['style', browserSync.reload]);
    gulp.watch('src/*.html', ['copy-html', 'copy-fonts-images', browserSync.reload]);
    gulp.watch('src/js/**/*.js', ['es-module', browserSync.reload]);
});

gulp.task('assemble', ['clean', 'copy-html', 'style', 'es-module', 'copy-fonts-images'], function() { });

gulp.task('build', ['assemble', 'optimize-img'], function() {
    return del.sync('app/css/style.css');
});