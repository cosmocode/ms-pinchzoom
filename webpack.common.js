const path = require('path');

module.exports = {
    entry: {'pinch-zoom': './src/pinch-zoom'},
    output: {
        path: path.resolve('dist'),
        filename: '[name].umd.js',
        publicPath: '/dist/',
    },
    stats: {
        modules: false,
        moduleTrace: false,
    },
    module: {
        loaders: [
            // {
            //     test: /\.js[x]?$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     enforce: 'pre',
            //     options: {
            //         fix: true,
            //     },
            // },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                    },
                },
            },
        ],
    },
};

