module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://172.16.5.150:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
