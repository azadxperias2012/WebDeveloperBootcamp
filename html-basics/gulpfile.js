var gulp = require('gulp'),
    connect = require('gulp-connect');

var outputDir = './views/'; 
var htmlSources = [ outputDir + '*.html'];

gulp.task('watch', function() {
    gulp.watch(htmlSources, ['html']);
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

gulp.task('default', ['html', 'connect', 'watch']);