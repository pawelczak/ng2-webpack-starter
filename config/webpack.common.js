const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'main': './src/main.browser.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.scss']
    },

    module: {

        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'to-string',
                    'css-loader?-url&sourceMap',
                    'postcss-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader?limit=10000000'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]

    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../src/assets'),
            to: path.join(__dirname, '../dist/assets')
        }])
    ],

    postcss: function () {
        return [
            precss,
            autoprefixer
        ];
    }

};
