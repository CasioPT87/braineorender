const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/bundled/index.js', // Entry point for bundling
  output: {
    path: path.resolve(__dirname, './client/bundled/dist'), // Output directory for bundled files
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Use html-loader for .html files
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/bundled/index.html', // Path to your HTML template file
      filename: 'index.html', // Output HTML file name
      inject: 'body', // Inject bundled JS in the body tag
    }),
  ],
};