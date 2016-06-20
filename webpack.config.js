const config = require('./config/index')
const path = require('path')
const webpack = require('webpack')

const reactEntry = path.resolve(config.basedir, 'react/src'),
    reactOutput = path.resolve(config.basedir, 'static/dist'),
    reactComponents = path.resolve(config.basedir, 'react/src/components');

var publicPath = '/static/dist';
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    context: reactEntry,
    entry: {
        index: ['./index.js', hotMiddlewareScript],
        router: ['./react-router-index.js', hotMiddlewareScript]
    },
    output: {
        filename: '[name].js',
        //chunkFilename: '[id].bundle.js',
        path: reactOutput,
        publicPath: publicPath
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,

                //react-hot-loader 让修改的部分自动刷新
                //stage-0 支持es2015+,如: static properties
                //注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                loaders: [
                    //'react-hot',
                    'babel?cacheDirectory=true,presets[]=react,presets[]=es2015,presets[]=stage-0'
                ],
                exclude: /(node_modules|bower_components)/,

            }
        ]
    },

    devtool: '#source-map',

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),   //配合react-hot
        new webpack.NoErrorsPlugin()
    ]
};