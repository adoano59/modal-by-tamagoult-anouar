const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/Modal.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Remplace style-loader par MiniCssExtractPlugin
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'modal.css', // Génère un fichier modal.css dans dist/
    }),
  ],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};