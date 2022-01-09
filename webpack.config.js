const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

// if "mode" is not set, will take process.env.NODE_ENV value, otherwise will fallback to production
process.env.NODE_ENV = 'development';

module.exports = {
  entry: {
    script: resolve('src', 'index.js')
  },
  output: {
    clean: true,
    // contenthash, id, name, 
    filename: '[name].build.js',
    library: 'clipperCore',
    globalObject: 'this'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
      inject: 'head',
      scriptLoading: 'blocking'
    })
  ]
};
