var webpack = require("webpack");
var path = require("path");
var DEV = path.resolve(__dirname, "dev");
var BUILD = path.resolve(__dirname, "build")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var debug = process.argv[1].indexOf('webpack-dev-server') !== -1;
var styles = debug ? 'style!css?sourceMap!sass?sourceMap' : ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")
var babelPresets = debug ? [ 'es2015', 'react', 'react-hmre' ] : [ 'es2015', 'react' ]

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
        presets: babelPresets
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
