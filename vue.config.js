module.exports = {
  devServer: {
    proxy: {
      // 访问的地址
      '/auth-web': {
        // 实际上走得请求地址（内网地址，需要自己更改）
        target: 'http://d-auth.dmsd.tech'
      }
    }
  }
}
