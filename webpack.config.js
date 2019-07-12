'use strict'
const path = require('path')
const distDir = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: distDir,
    },
    devServer: {
        contentBase: distDir,
        port: 8080,
        proxy: {
            '/api': 'https://api.punkapi.com/v2/'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },{
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000',
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader'
            },
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tap That'
        })
    ]
}