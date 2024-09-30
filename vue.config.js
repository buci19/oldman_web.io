const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    open: true, // 自动打开浏览器
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
