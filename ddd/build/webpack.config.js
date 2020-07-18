const PnpPlugin = require('pnp-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { resolvePath } = require('../shared/util')

const {
  __DIR__,
  __CDN_URI__
} = require('../shared/constant')

/**
 * webpack 基础公共配置
 * @param { 'production' | 'development' | 'test' } env
 * @returns { webpack.Configuration }
 */
module.exports = env => {
  const isEnvProduction = env === 'production'
  const isEnvDevelopment = env === 'development'
  const isEnvTest = env === 'test'

  const getAssetOutput = () => {
    if (isEnvDevelopment) {
      return {
        path: resolvePath(__DIR__),
        filename: '[name].js',
        chunkFilename: '[id].js',
        publicPath: ''
      }
    } else if (isEnvProduction || isEnvTest) {
      return {
        path: resolvePath(__DIR__),
        filename: 'js/[name].[contenthash:6].js',
        chunkFilename: 'js/[id].[contenthash:6].js',
        publicPath: __CDN_URI__
      }
    }
  }

  return {
    // 指定 webpack 入口
    entry: {
      app: resolvePath('app/index.js')
    },
    // 指定 webpack 输出配置
    output: getAssetOutput(),
    mode: env,
    devtool: isEnvDevelopment ? 'cheap-module-source-map' : 'source-map',
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': resolvePath('app')
      },
      plugins: [
        PnpPlugin
      ]
    },
    resolveLoader: {
      plugins: [
        PnpPlugin.moduleLoader(module)
      ]
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader', {
          optional: 'runtime',
          cacheDirectory: true
        }),
        options: {
          presets: [
            require('@babel/preset-env')
          ],
          plugins: [
            // 支持新特性 a?.b 操作
            require('@babel/plugin-proposal-optional-chaining')
          ]
        }
      }, {
        test: /\.css$/,
        include: resolvePath('app'),
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.vue$/,
        include: resolvePath('app'),
        loader: require.resolve('vue-loader'),
        options: {
          hotReload: isEnvDevelopment
        }
      }, {
        test: /\.(png|gif|jpe?g)$/i,
        include: resolvePath('app'),
        loader: 'url-loader?limit=10000&quality=85&esModule=false&outputPath=images'
      }]
    },
    plugins: [
      new VueLoaderPlugin(),
      // 非开发环境通过使用 `MiniCssExtractPlugin` 插件来抽离样式并单独打包
      // 到文件中，并采用 contenthash 的方式来命名文件，方便用于控制客户端浏览器缓存
      !isEnvDevelopment && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:6].css',
        chunkFilename: 'css/[id].[contenthash:6].css',
        publicPath: 'css'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        reportFilename: resolvePath('reports/reports.html'),
        statsFilename: resolvePath('reports/stats.json'),
        openAnalyzer: false,
        logLevel: 'info'
      })
    ].filter(Boolean)
  }
}
