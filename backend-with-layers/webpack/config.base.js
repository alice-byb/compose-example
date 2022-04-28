const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {},
  mode: 'production',
  devtool: 'eval-cheap-module-source-map',
  externalsPresets: { node: true },
  node: {
    __dirname: true,
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  performance: {
    hints: 'warning',
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, './../.build'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: '../../[resource-path]',
  },
};
