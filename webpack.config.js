const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    library: 'Mastermind',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
