var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     mangle: { screw_ie8 : true },
        //     compress: { screw_ie8: true },
        //     comments: false
        // })
    ],

    htmlLoader: {
        minimize: false
    },

    tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: './src'
    }
});
