let mix = require('laravel-mix'),
    gulp = require('gulp'),
    compass = require('gulp-compass'),
    path = require('path');

gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            project: path.join(__dirname, 'assets'),
            css: 'css',
            sass: 'sass'
        }))
        .pipe(gulp.dest('app/assets/temp'));
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');