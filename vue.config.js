const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5080,
    proxy: {
      '/api': {
        target: 'http://localhost:5081',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
})
