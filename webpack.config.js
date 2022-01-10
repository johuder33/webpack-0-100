const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

// if "mode" is not set, will take process.env.NODE_ENV value, otherwise will fallback to production
process.env.NODE_ENV = 'development';

module.exports = {
  devServer: {
    port: 5000,
    static: resolve('dist'),
    compress: true,
    // historyApiFallback: true,
  },
  devtool: false,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      components: resolve('src', 'components'),
      styles: resolve('src', 'styles'),
      pages: resolve('src', 'pages'),
      assets: resolve('assets'),
    },
  },
  entry: {
    script: resolve('src', 'index.js')
  },
  output: {
    clean: true,
    // contenthash, id, name, 
    filename: '[name].build.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
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
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpeg?|png|gif|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      },
      // data URI assets ? uncomment me
      // {
      //   test: /\.(ttf)$/,
      //   type: 'asset/inline'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css'
    }),
    new Webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
