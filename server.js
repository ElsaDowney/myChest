import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const app = express();
var bodyParser = require('body-parser');
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(bodyParser.json());
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.use('/',require('./routes/index'));


app.listen(3000, function() {
  console.log("server started at http://localhost:3000");
});
