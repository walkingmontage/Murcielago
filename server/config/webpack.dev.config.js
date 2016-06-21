const config = require('./index')
const path = require('path')
const webpack = require('webpack')

const reactEntry = path.resolve(config.basedir, 'react/src'),
    reactOutput = path.resolve(config.basedir, 'react/build'),
    publicPath = '/react',
    webpackHotMiddleware = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    context: reactEntry,
    entry: {
        index: ['./index.js', webpackHotMiddleware],
        router: ['./react-router-index.js', webpackHotMiddleware]
    },
    output: {
        filename: '[name].js',
        path: reactOutput,
        publicPath: publicPath
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                //stage-0 支持es2015+,如: static properties
                //注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                loaders: [
                    'babel?cacheDirectory=true,presets[]=react,presets[]=es2015,presets[]=stage-0'
                ],
                exclude: /(node_modules|bower_components)/,

            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),   //配合react-hot
        new webpack.NoErrorsPlugin()
    ]
};