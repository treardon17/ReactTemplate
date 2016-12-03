var webpack = require("webpack");
var path = require("path");
var DEV = path.resolve(__dirname, "dev");
var BUILD = path.resolve(__dirname, "build")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var debug = true;
var styles = debug ? 'style!css?sourceMap!sass?sourceMap' : ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")

var exports = {
  entry: DEV,
  output: {
    path: BUILD,
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: DEV,
      query: {
        presets: [ 'es2015', 'react', 'react-hmre' ]
      }
    },
    {
      test: /\.scss$/,
      loader: styles
    }]
  },
  plugins:[
    new ExtractTextPlugin("[name].css")
  ]
}

module.exports = exports;
