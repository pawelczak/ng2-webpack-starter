var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'main': './src/main.browser.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: './dist'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
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
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],

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
        ]
    }

};
