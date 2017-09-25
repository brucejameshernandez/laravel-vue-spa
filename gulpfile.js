let mix = require('laravel-mix'),
    gulp = require('gulp');
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

gulp.task('default', ['compass']);