var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express()

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  accessControlAllowOrigin: '*',
  accessControlAllowHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  dataType: 'json',
  stats: {
    colors: true
  }
}).listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3001');
});


var fakeDB = {};
/*
readJSONFile('./data/employeesData.json', function(err, data){
  if (err){
    console.error("Error in server :()", err);
  } else {
    fakeDB.employeesData = data;
  }
});

app.get('/employeesData', function (req, res, next){
  res.json(fakeDB.employeesData);
});
*/
