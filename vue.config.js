const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  pwa: {
    name: 'KillTypo The Typing App',
    themeColor: '#253444',
    msTileColor: '#ffffff',
    iconPaths: {
      favicon32: 'logo/logo32.png',
      favicon16: 'logo/logo16.png',
      appleTouchIcon: 'logo/logo152.png',
      msTileImage: 'logo/logo144.png'
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      importScripts: ['/sw-offline-google-analytics.prod.v0.0.25.js', '/sw-analytics.js'],
      runtimeCaching: [
        {
          handler: 'networkFirst',
          urlPattern: /\//
        },
        {
          handler: 'cacheFirst',
          urlPattern: /[.](js|html|css|png|jpg|gif|svg|eot|ttf|woff|ogv|webm|mp4)$/
        }
      ]
    }
  },
  configureWebpack: {
    plugins: process.env.NODE_ENV === 'production' ? [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/404',
          '/es',
          '/mode',
          '/es/modo',
          '/game',
          '/es/juego'
        ],
        renderer: new Renderer({
          inject: {},
          headless: true,
          renderAfterTime: 2000
        })
      })
    ] : []
  }
}
