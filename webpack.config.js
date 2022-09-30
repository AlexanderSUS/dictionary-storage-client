const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          this.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    hot: true,
    static: './dist',
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
