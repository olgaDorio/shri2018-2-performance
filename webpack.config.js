const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');

const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

const glob = require('glob');
const path = require('path');

module.exports = {
  mode: 'production',

  optimization: {
    minimize: true,
  },

  entry: {
    scripts: './scripts/scripts.js',
  },

  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false,
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new PurifyCSSPlugin({
      paths: ['./scripts/scripts.js', './scripts/popup.js', './index.html'],
      minimize: true,
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.html',
      // excludeAssets: [/scripts.js/],
      minify: {
        html5: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
      },
    }),

    new HtmlWebpackExcludeAssetsPlugin(),

    new CopyWebpackPlugin([
      { from: 'root', to: '' },
      { from: 'fonts', to: 'fonts' },
      { from: 'assets', to: 'assets' },
    ]),
  ]
};

