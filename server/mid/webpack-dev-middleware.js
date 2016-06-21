const webpackDevMiddleware = require("webpack-dev-middleware"),
    webpack = require("webpack"),
    webpackConfig = require('../config/webpack.dev.config'),
    compiler = webpack(webpackConfig);


module.exports = (app) => {
    console.log('Use webpack develop middleware ...')

    app.use(webpackDevMiddleware(compiler, {
        noInfo: false,
        // display no info to console (only warnings and errors)

        quiet: false,
        // display nothing to the console

        publicPath: webpackConfig.output.publicPath,

        stats: {
            colors: true
        }
        // options for formating the statistics
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
        //log: console.log,
        //path: '/__webpack_hmr',
        //heartbeat: 10 * 1000
    }));
}