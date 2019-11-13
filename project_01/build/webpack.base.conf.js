const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const paths = require('./util/path-helper')
const { build, dev } = require('../config/index')

module.exports = {
  entry: {
    app: isProd && !isDev ? build.appJs : dev.appJs
  },

  output: {
    path: isProd && !isDev ? build.output.assetRootPath : dev.output.assetRootPath,
    filename: isProd && !isDev ? '[name]-[chunkhash].js' : '[name].bundle.js',
    chunkFilename: isProd && !isDev ? '[name]-[chunkhash].js' : '[name].bundle.js',
    publicPath: isProd && !isDev ? build.output.assetPrefixPath : dev.output.assetPrefixPath
  },

  mode: isProd && !isDev ? 'production' : 'development',
  devtool: isProd && !isDev ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  resolve: {
    extensions: ['.js', '.vue', '.json', '.xml'],
    alias: {
      vue$: require.resolve('vue/dist/vue.common.js'),
      vuex$: require.resolve('vuex/dist/vuex.common.js'),
      'vue-router$': require.resolve('vue-router/dist/vue-router.common.js'),
      page: paths.resolveSrc('page'),
      '@': paths.resolveSrc(''),
      '~': paths.resolveSrc('')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      }
    ]
  },

  plugins: [
    // Make the plugin!
    new VueLoaderPlugin()
  ]
}
