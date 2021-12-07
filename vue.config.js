module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/code-scanner-pwa/'
    : '/',
  devServer: {
    port: 7100,
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
