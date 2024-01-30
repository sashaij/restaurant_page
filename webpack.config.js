const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve (__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules:
        [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
              ]  
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Reataurant Page',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
};