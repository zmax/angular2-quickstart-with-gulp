var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');
var tsProject = ts.createProject('src/tsconfig.json', {
  typescript: require('typescript')
});

gulp.task('js', function() {
    var tsResult = tsProject.src()
      .pipe(ts(tsProject));

    return tsResult.js
    //   .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('dist/'));
});

gulp.task('html', function () {
    return gulp.src('templates/**/*.html')
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('clean', function(done) {
  del(['dist'], done);
});

gulp.task('libs', function () {
    return gulp.src([
          'node_modules/angular2/bundles/angular2.dev.js',
          'node_modules/traceur/bin/traceur-runtime.js',
          'node_modules/es6-module-loader/dist/es6-module-loader.js',
          'node_modules/systemjs/dist/system.js',
          'node_modules/es6-shim/es6-shim.js'
        ])
      .pipe(gulp.dest('dist/lib'));
});



gulp.task("watch", function() {

    var server = gls.static('./', 9000);
    server.start();

    gulp.watch(['src/**/*.ts'], ['js']);
    gulp.watch(['templates/**/*.html'], ['html']);
    gulp.watch(['src/**/*.ts', 'templtes/**/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('default', ['js', 'libs', 'html', 'watch']);
