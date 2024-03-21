const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title: 'Output Management',
        }),
    ],

};