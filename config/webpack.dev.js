const webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js'),
    validate = require('webpack-validator');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

const config = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'src'
    }
});

module.exports = validate(config);
