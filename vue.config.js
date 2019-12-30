const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: './static',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '^/ThirdSupport.ashx': {
        target: 'http://61.136.223.57:8080',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      'lib-flex': './src/rem/lib-flex.js',
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        '@@': resolve('src/components'),
        'assets': resolve('src/assets'),
        'common': resolve('src/common'),
      },
    },
  },
  chainWebpack(config) {
    // config.plugins.delete('preload') // TODO: need test
    // config.plugins.delete('prefetch') // TODO: need test
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
