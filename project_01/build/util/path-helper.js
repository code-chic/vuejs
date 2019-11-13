const path = require('path')

module.exports = {
  resolveApp(relaPath) {
    return path.posix.join(process.cwd(), relaPath)
  },

  resolveModule(relaPath) {
    return path.posix.join(__dirname, '../node_modules' + relaPath)
  },

  resolveSrc(relaPath) {
    return path.posix.join(__dirname, '../src' + relaPath)
  }
}
