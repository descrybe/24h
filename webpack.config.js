const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: '/src/index.js',
    module: {
      rules: [
        { 
          test: /\.(css)$/, 
          use: [ 'style-loader', 'css-loader' ] 
        },
        { 
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: 'babel-loader' 
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './dist/index.html' })
    ],
    devServer: {
      hot: true,
      open: true
    },
    mode: 'development'
};