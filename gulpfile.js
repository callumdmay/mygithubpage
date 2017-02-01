var gulp = require('gulp');
var clean = require('gulp-clean');
var flatten = require('gulp-flatten');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var ghPages = require('gulp-gh-pages');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

// Minify compiled CSS
gulp.task('minify-css', function() {
    return gulp.src('css/main.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('clean', function() {
    gulp.src('dist', {
            read: false
        })
        .pipe(clean());
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy-vendor', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/css'))

    gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular-route/angular-route.min.js',
        "node_modules/angular-animate/angular-animate.min.js"])
        .pipe(flatten())
        .pipe(concat("angular.min.js"))
        .pipe(gulp.dest('dist/'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('dist/'))

    gulp.src(['node_modules/animate.css/animate.min.css'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/css'))

    gulp.src(['vendor/.nojekyll'])
        .pipe(gulp.dest('dist/'))

})

gulp.task('copy-assets', function() {

    gulp.src(['media/**', ])
        .pipe(gulp.dest('dist/'))

    gulp.src(['res/Callum May Resume.pdf', ])
        .pipe(gulp.dest('dist/'))

    gulp.src('CNAME')
        .pipe(gulp.dest('dist/'))

    gulp.src('mail/**')
        .pipe(gulp.dest('dist/mail'))


});

gulp.task('copy-html', function() {
  gulp.src(['html/**'])
      .pipe(flatten())
      .pipe(gulp.dest('dist/'))
});

gulp.task('concat-js', function(){
  gulp.src(["js/app.module.js", "js/app.config.js", "js/**"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("dist/"))
});


// Run everything
gulp.task('default', [ 'minify-css', 'copy-vendor', 'copy-assets', 'concat-js', 'copy-html']);

// Configure the browserSync task
gulp.task('browserSync', ['copy-assets', 'copy-vendor', 'webserver'], function() {
    browserSync.init({
      proxy: "localhost:8000",
      notify: false
    })
})

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      fallback: "index.html",
    }));
});

// Dev task with browserSync
gulp.task('dev', ['default', 'webserver', 'browserSync'], function() {
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('dist/**', browserSync.reload);
    gulp.watch('html/**', ['copy-html']);
    gulp.watch('js/**', ['concat-js']);
    gulp.watch('css/**', ['minify-css']);
});
