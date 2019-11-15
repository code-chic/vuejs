const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./util/path-helper')
const { build, dev } = require('../config/index')

function cssLoaders(options) {
  options = options || {}
  const cssLoader = {
    loader: 'css-loader',
    options: {
      // object { url?, import?, modules?, sourceMap?, importLoaders?, localsConvention?, onlyLocals? }
      modules: true,
      localsConvention: 'dashes', // "asIs" | "camelCase" | "camelCaseOnly" | "dashes" | "dashesOnly"
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // 使用 `mini-css-extract-plugin` 提取样式
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    styl: generateLoaders('stylus')
  }
}

function styleLoaders(options) {
  const output = []
  const loaders = cssLoaders(options)
  for (const extension in loaders) {
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loaders[extension]
    })
  }

  return output
}

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
      vue$: require.resolve('vue/dist/vue.esm.js'),
      vuex$: require.resolve('vuex/dist/vuex.esm.js'),
      'vue-router$': require.resolve('vue-router/dist/vue-router.esm.js'),
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
      },
      ...styleLoaders({
        extract: isProd && !isDev,
        sourceMap: isProd && !isDev ? build.useCssSourceMap : dev.useCssSourceMap
      })
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: isProd && !isDev ? build.html : dev.html,
      filename: 'index.html',
      minify: !(isProd && !isDev)
        ? false
        : {
            // html-minifier configure.
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            preserveLineBreaks: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true,
            sortClassName: true
          },
      cache: isProd && !isDev
    }),
    // Make the plugin!
    new VueLoaderPlugin()
  ]
}
