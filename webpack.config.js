var autoprefixer = require('autoprefixer');
var precss = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: './app.js',
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'public',
    port: 3000
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        // https://github.com/babel/babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },  
      { test: /\.(woff2?|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.pug',
      inject: true
    }),
  ],

  postcss: function() {
    var precss = require('precss');
    var autoprefixer = require('autoprefixer');
    return [
      autoprefixer({ browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] }),
      precss
    ];
  }
};