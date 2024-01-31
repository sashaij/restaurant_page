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
        assetModuleFilename: '[name][ext]',
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
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