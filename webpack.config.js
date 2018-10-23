const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const path = require('path');

module.exports = {
  mode: 'production',

  entry: './scripts/banner.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'banner.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      excludeAssets: [/banner.js/],
      minify: {
        removeComments: true,
        // useShortDoctype: true,
        collapseWhitespace: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
      },
    }),

    new HtmlWebpackExcludeAssetsPlugin(),

    new CopyWebpackPlugin([
      { from: 'fonts', to: 'fonts' },
      { from: 'assets', to: 'assets' },
      { from: 'root', to: '' },
    ])
  ]
};



