const { resolveApp, resolveSrc } = require('../build/util/path-helper')

module.exports = {
  // 构建生产环境时配置项
  build: {
    appJs: resolveSrc('main.js'),
    html: resolveApp('public/index.prod.html'),
    output: {
      assetRootPath: resolveApp('dist/static/js'),
      assetPrefixPath: 'https://cdn.lookpoint.cn/'
    },

    useEslint: true,
    useCssSourceMap: true
  },

  // 构建开发环境时配置项
  dev: {
    appJs: resolveSrc('main.js'),
    html: resolveApp('public/index.dev.html'),
    output: {
      assetRootPath: resolveApp('dist'),
      assetPrefixPath: ''
    },

    useEslint: true,
    useCssSourceMap: true,
    host: 'locahost',
    port: 8080,
    clientLogLevel: 'silent',
    autoOpenBrowser: true,
    setupProxy: resolveSrc('setupProxy.js'),
    overlay: true,
    poll: true
  }
}
