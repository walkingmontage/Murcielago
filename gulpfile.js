const gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    webpack = require('webpack-stream'),
    config = require('./config/index'),
    uglify = require('gulp-uglify'),
    webpackConfig = require('./webpack.config'),
    reactOutput = path.resolve(config.basedir, 'static/dist');


gulp.task('webpack', function() {
    return gulp.src(path.join(config.basedir, 'react/src/**/*.js'))
        .pipe(webpack(webpackConfig))
        .pipe(uglify())
        .pipe(gulp.dest(reactOutput));
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
        "exec": 'node'
        //"exec": 'node --debug',
    })
    .on('restart', function(){
        console.log('restarted...')
    })
})

/*
gulp.task('watch', function() {
    var watcher = gulp.watch('react/src/!**!/!*.js', ['babel']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    return watcher
})
*/

gulp.task('default', ['nodemon'], function() {
    console.log('Server started ...')
})
