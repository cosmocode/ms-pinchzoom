const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: {'pinch-zoom.uncompressed': './src/pinch-zoom'},
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            exclude: /\.uncompressed\./,
            parallel: true,
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
});
