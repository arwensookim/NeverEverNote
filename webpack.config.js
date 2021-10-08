const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/neverever_note.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   exclude: []
      // }
    ],
    
  },
  devtool: 'source-map'
};