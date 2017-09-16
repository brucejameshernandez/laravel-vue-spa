var mix = require('laravel-mix');

var htmlmin = require('gulp-htmlmin');
var gulp = require('gulp');

gulp.task('default', function() {
    gulp.task('compress', function() {
        var opts = {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            minifyJS: true
        };

        return gulp.src('./storage/framework/views/*')
            .pipe(htmlmin(opts))
            .pipe(gulp.dest('./storage/framework/views/'));
    });

    mix.sass('app.scss', 'public/css/app.css');
    mix.js('node_modules/jquery/dist/jquery.min.js', 'public/scripts/jquery.min.js');
    mix.js('node_modules/swiper/dist/js/swiper.min.js', 'public/scripts/swiper.min.js');
    mix.js('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'public/scripts/bootstrap.min.js');
    mix.js('app.js', 'public/scripts/app.min.js');
    gulp.src('./storage/framework/views/*')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            minifyJS: true,
        }))
        .pipe(gulp.dest('./storage/framework/views/'));

});