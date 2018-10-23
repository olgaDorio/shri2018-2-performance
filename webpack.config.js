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
    scripts: './scripts.js',
  },

  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      excludeAssets: [/scripts.js/],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        html5: true,
        // preserveLineBreaks
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        useShortDoctype: true,
      },
    }),

    new HtmlWebpackExcludeAssetsPlugin(),

    new CopyWebpackPlugin([
      { from: 'fonts', to: 'fonts' },
      { from: 'assets', to: 'assets' },
      { from: 'root', to: '' },
    ]),
  ]
};

