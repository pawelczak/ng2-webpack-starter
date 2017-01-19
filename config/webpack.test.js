const helpers = require('./helpers');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    entry: [
        'todo'
    ],

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'to-string-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]

    }
};
