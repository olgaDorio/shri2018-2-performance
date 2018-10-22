const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const path = require('path');

module.exports = {
  mode: 'production',

  // не совсем то место
  entry: './banner.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'banner.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      excludeAssets: [/banner.js/],
      // minify: {
      //   removeComments: true,
      //   useShortDoctype: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      // },
      minify: false,
    }),

    new HtmlWebpackExcludeAssetsPlugin(),

    new CopyWebpackPlugin([
      { from: 'fonts', to: 'fonts' },
      { from: 'assets', to: 'assets' },
      { from: 'root', to: '' },
      // { from: 'favicon.ico', to: 'favicon.ico' },
      // { from: 'manifest.json', to: 'manifest.json' },
      // { from: 'print.css', to: 'print.css' },
      // { from: 'scripts.js', to: 'scripts.js' },
      // { from: 'styles.css', to: 'styles.css' },
    ])
  ]
};



