const { merge } = require('webpack-merge');
const base = require('./config.base.js');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(base, {
  entry: slsw.lib.entries,
  devtool: 'source-map',
  externals: [nodeExternals()],
});
