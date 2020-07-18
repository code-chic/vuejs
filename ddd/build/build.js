const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const baseOption = require('./webpack.config')('production')
const externalScriptConfigs = require('./externals').externalScriptConfigs
const { resolvePath } = require('../shared/util')

const smp = new SpeedMeasurePlugin()

const buildOption = merge(baseOption, {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|vue)$/,
      exclude: /node_modules/,
      include: resolvePath('app'),
      loader: require.resolve('eslint-loader'),
      options: {
        fix: true,
        lintOnSave: true
      }
    }]
  },

  // 外置化配置项
  externals: externalScriptConfigs
    .map(external => {
      return {
        [external.package]: external.globalNamespace
      }
    })
    /* 生产环境不需要模拟数据，mockjs代码在这里被排除 */
    .concat(['mockjs']),

  plugins: [
    new HtmlPlugin({
      template: resolvePath('public/index.prod.html'),
      filename: 'index.html',
      externals: {
        scripts: externalScriptConfigs
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})

module.exports = smp.wrap(buildOption)
