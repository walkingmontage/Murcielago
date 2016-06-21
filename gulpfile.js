const gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    webpack = require('webpack-stream'),
    config = require('./server/config/index'),
    uglify = require('gulp-uglify'),
    webpackConfig = require('./server/config/webpack.config');


gulp.task('webpack', function() {
    return gulp.src(path.join(config.basedir, 'react/src/**/*.js'))
        .pipe(webpack(webpackConfig))
        .pipe(uglify())
        .pipe(gulp.dest(webpackConfig.output.path));
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
        "script": "./server/bin/www",
        "exec": 'node'
        //"exec": 'node --debug',
    })
    .on('restart', function(){
        console.log('restarted...')
    })
})


gulp.task('default', ['nodemon'], function() {
    console.log('Server started with nodemon ...')
})


//build for production env
gulp.task('build', ['webpack'], function() {
    console.log('Webpack building start ...')
})