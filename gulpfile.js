var gulp = require('gulp');
// var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var config = require('./config')

gulp.task('babel', function() {
    return browserify('react/src/index.js', {
        paths: ['react/src'],
        basedir: config.basedir
    })
        .transform('babelify', {
            presets: ['react', 'es2015']
        })
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('react/build/'));
});


gulp.task('nodemon', function() {
    nodemon({
        "restartable": "rs",
        "ignore": [
            '.git',
            'node_modules',
            'public',
            '.idea'
        ],
        "env": {
            "NODE_ENV": "development",
            "PORT": "1234"
        },
        "ext": "js json html",
        "script": "./bin/www"
    })
    .on('restart', function(){
        console.log('restarted...')
    })
})

gulp.task('watch', function() {
    livereload.listen();
    var watcher = gulp.watch('react/src/**/*.js', ['babel']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    return watcher
})

gulp.task('default', ['babel', 'nodemon', 'watch'], function() {
    console.log('Server is beginning ...')
})