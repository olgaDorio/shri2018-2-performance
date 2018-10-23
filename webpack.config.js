const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const path = require('path');

module.exports = {
  mode: 'production',

  entry: {
    banner: './scripts/banner.js',
    // style: './styles/bootstrap.css'
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      excludeAssets: [/banner.js/],
      minify: {
        removeComments: true,
        // collapseWhitespace: true,
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

// node_modules/.bin/purifycss bootstrap.css index.html -o bootstrap-min.css -w img

