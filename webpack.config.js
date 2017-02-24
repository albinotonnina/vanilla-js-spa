const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    module: {


        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules', 'prosemirror')
                ],
                // Need this here for prosemirror til it has own .babelrc
                query: {
                    presets: ['es2015']
                }
            }
            ]
    },
};
