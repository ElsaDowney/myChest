
function makeSever() {


  // import express from 'express';
  // import webpack from 'webpack';
  // import webpackConfig from './webpack.config';

  const express=require('express');
  const webpack=require('webpack');
  const webpackConfig=require('./webpack.config');


  const app = express();
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.use(express.static('public'));

  const bodyParser = require('body-parser');
  app.use(bodyParser.json());

  app.use('/', require('./routes/index'));


  var server = app.listen(3000, function () {
    console.log("server started at http://localhost:3000");
  });

  return server;
}
module.exports =makeSever ;