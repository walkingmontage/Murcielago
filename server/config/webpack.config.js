const config = require('./index')
const path = require('path')

const reactEntry = path.resolve(config.basedir, 'react/src'),
    reactOutput = path.resolve(config.basedir, 'react/build');

module.exports = {
    context: reactEntry,
    entry: {
        index: './index.js',
        router: './react-router-index.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].bundle.js',
        path: reactOutput,
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
    }
};