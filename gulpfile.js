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

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    ''
].join('');


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

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/freelancer.js')
        .pipe(uglify())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('cleanDist', function() {
    return gulp.src('dist', {
            read: false
        })
        .pipe(clean());
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy-vendor', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/'))

    gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular-route/angular-route.min.js'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/'))

    gulp.src(['node_modules/angular-scroll-animate/dist/angular-scroll-animate.js'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(flatten())
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

gulp.task('copy-js', function() {
  gulp.src(['app.config.js', 'app.module.js', 'mainController.js'], {
          cwd: 'js/'
      })
      .pipe(flatten())
      .pipe(gulp.dest('dist/'))
});

gulp.task('deploy', ['minify-css', 'minify-js', 'copy-vendor', 'copy-assets', 'copy-html', 'copy-js'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

// Run everything
gulp.task('default', [ 'minify-css', 'minify-js', 'copy-vendor', 'copy-assets', 'copy-js']);

// Configure the browserSync task
gulp.task('browserSync', ['copy-assets', 'copy-vendor'], function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'default'], function() {
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('dist/**', browserSync.reload);
    gulp.watch('html/**', ['copy-html']);
    gulp.watch('js/**', ['minify-js', 'copy-js']);
    gulp.watch('css/**', ['minify-css']);
});
