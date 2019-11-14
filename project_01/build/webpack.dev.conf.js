process.env.NODE_ENV = process.env.BABEL_ENV = 'development'

const portfinder = require('portfinder')
const merge = require('webpack-merge')
const dev = require('../config/index').dev
const baseConfig = require('./webpack.base.conf')

const HOST = process.env.HOST || dev.host
const PORT = process.env.PORT || dev.port

const devConfig = merge(baseConfig, {
  devServer: {
    contentBase: false,
    clientLogLevel: dev.clientLogLevel,
    host: HOST,
    port: PORT,
    hot: true,
    compress: true,
    open: !!dev.autoOpenBrowser,
    overlay: dev.overlay ? { warnings: true, errors: true } : false,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 3000,
      poll: !!dev.poll
    }
  }
})

portfinder.basePort = PORT
module.exports = new Promise((resolve, reject) => {
  portfinder
    .getPortPromise()
    .then(port => {
      devConfig.devServer.port = port
      resolve(devConfig)
    })
    .catch(err => reject(err))
})
