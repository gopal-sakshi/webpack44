const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);

// Tell express 
    // use the webpack-dev-middleware 
    // use the "webpack.config.js" configuration file ===> as a base.
app.use(
  webpackDevMiddleware(compiler, { publicPath: config.output.publicPath, })
);

// Serve the files on port 9989.
app.listen(9989, function () {
  console.log('Example app listening on port 9989!\n');
});