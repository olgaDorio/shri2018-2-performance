const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
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

  plugins: [
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

