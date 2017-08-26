var gulp = require('gulp'),
connect = require('gulp-connect');

var outputDir = './';
var cssDir = './styles/';
var htmlSources = [ '*.html', outputDir + 'views/*.html'];
var cssSources = [ cssDir + '*.css'];

gulp.task('watch', function() {
    gulp.watch(htmlSources, ['html']);
    gulp.watch(cssSources, ['css']);
});

gulp.task('connect', function() {
    connect.server({
        root: outputDir,
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(gulp.dest(outputDir + 'css'))
        .pipe(connect.reload());
});

gulp.task('default', ['html', 'css', 'connect', 'watch']);