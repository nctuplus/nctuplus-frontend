const Path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV
const isProd = env === 'production'

const plugins = [
  new webpack.DefinePlugin({
    SERVER_URL: isProd
      ? '"https://plus-test-1.haohao.in"'
      : '"https://plus-test-1.haohao.in"'
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new WebpackNotifierPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.ejs',
    inject: 'body'
  })
]

if (!isProd) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
if (isProd) {
  plugins.push(new MiniCssExtractPlugin({
    filename: '[name]-[contenthash].css',
    chunkFilename: '[id]-[contenthash].css'
  }))
}

module.exports = {
  entry: [
    'react-hot-loader/patch',
    Path.resolve(__dirname, 'src/boot.jsx')
  ],
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
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [ require('autoprefixer') ] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [ require('autoprefixer') ] }
          },
          { loader: 'sass-loader' }
        ],
        exclude: [Path.resolve(__dirname, 'src/assets/styles')]
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [ require('autoprefixer') ] }
          },
          { loader: 'sass-loader' }
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
