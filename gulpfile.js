var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var config = require('./config/index')
var path = require('path')

gulp.task('babel', function() {
    return browserify('react/src/react-router-index.js', {
            paths: ['react/src/js/components'],
            basedir: config.base_dir
        })
        .transform('babelify', {
            plugins: ['transform-class-properties'],
            presets: ['react', 'es2015']
        })
        .bundle()
        .pipe(source('react-router-index.js'))
        .pipe(gulp.dest('react/build/'));
});


gulp.task('nodemon', function() {
    nodemon({
        "restartable": "rs",
        "ignore": [
            '.git',
            'node_modules',
            'public',
            'data',
            '.idea',
            'temp',
            'mk_web',
            'mkt/'
        ],
        "env": {
            "NODE_ENV": "development",
            "PORT": "1234"
        },
        "ext": "js json html",
        "script": "./bin/www",
        "exec": 'node --debug',
    })
    .on('restart', function(){
        console.log('restarted...')
    })
})

gulp.task('watch', function() {
    var watcher = gulp.watch('react/src/**/*.js', ['babel']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    return watcher
})

gulp.task('default', ['babel', 'nodemon', 'watch'], function() {
    console.log('Server started ...')
})
