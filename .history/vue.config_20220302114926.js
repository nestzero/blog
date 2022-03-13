module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": '@/assets',
        "common": '@/common',
        "components": '@/components',
        "filter"
        "views": '@/views',
        "network": '@/network',
        "api": '@/api',
      }
    }
  }
}