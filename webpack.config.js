const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

// if "mode" is not set, will take process.env.NODE_ENV value, otherwise will fallback to production
process.env.NODE_ENV = 'development';

module.exports = {
  devtool: false,
  entry: {
    script: resolve('src', 'index.js')
  },
  output: {
    clean: true,
    // contenthash, id, name, 
    filename: '[name].build.js',
    library: 'clipperCore'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    // chrome: '98' // no need polyfill for this chrome version
                    chrome: '45' // need polyfill for this old chrome version
                  }
                }
              ]
            ],
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
      inject: 'head',
      scriptLoading: 'blocking'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css'
    }),
  ]
};
