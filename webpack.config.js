const Path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV

const plugins = [
  new webpack.DefinePlugin({
    SERVER_URL: env === 'production'
      ? '"https://plus.nctu.edu.tw/api"'
      : '"http://jpvpn.haohao.in:3056"'
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new WebpackNotifierPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.ejs',
    inject: 'body'
  })
]
if (env === 'development') { plugins.push(new webpack.HotModuleReplacementPlugin()) }

if (env === 'production') {
  plugins.push(new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }))
}

module.exports = {
  entry: Path.resolve(__dirname, 'src/boot.jsx'),
  output: {
    path: Path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loaders: ['babel-loader'],
        include: Path.join(__dirname, 'src/')
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader')
        ]
      },
      {
        test: /\.scss$/,
        use: [
          env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' },
          { loader: 'postcss-loader', options: { plugins: () => [require('autoprefixer')] } }
        ],
        exclude: [Path.resolve(__dirname, 'src/assets/styles')]
      },
      {
        test: /\.scss$/,
        use: [
          env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          { loader: 'postcss-loader', options: { plugins: () => [require('autoprefixer')] } }
        ],
        include: [Path.resolve(__dirname, 'src/assets/styles')]
      },
      {
        test: /\.(ttf|eot|png|gif|jpg|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'url-loader', options: { limit: 8192 } }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [Path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      assets: Path.join(__dirname, 'src/assets')
    }
  },
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  plugins,
  mode: env
}
