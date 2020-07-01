module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: [
          '@import "~@/styled/element-ui/variables.scss";',
          '@import "~element-ui/packages/theme-chalk/src/index";'
        ].join('')
      }
    }
  }
}
