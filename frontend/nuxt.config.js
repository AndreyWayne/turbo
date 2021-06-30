const webpack = require("webpack");

module.exports = {
  /*
  ** Headers of the page
  */
  cache: true,
  env: {
    baseUrl: process.env.BASE_URL || 'http://192.168.0.194:9000/api/'
  },
  head: {
    title: 'TURBO | кузовной ремонт и автопокраска в Челябинске',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, nofollow' },
      { name: 'copyright', lang:'ru', content:'andreywayne.ru' },
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { 'http-equiv': 'content-language', content: 'ru' },
      { property: 'og:locale', content: 'ru_Ru' },
      { name: 'yandex-verification', content: '1e02698097de6b62' },
      { name: 'google-site-verification', content: 'Nri6jFGFA6NIQDMssp-ea-lW4Qs8MoBdghbK_7w0yso' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/image/favicon.png' },
      { rel: "sitemap", href: "sitemap.xml", type: "application/xml" },
      { href: "https://unpkg.com/aos@2.3.1/dist/aos.css", rel:"stylesheet" }
    ],
    script: [
      { src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU' },
      { src: '/yandexMap.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    "assets/main.css"
  ],
  modules: [
    ['@nuxtjs/moment', { locales: ['ru'], defaultLocale: 'ru' }],
    ['@nuxtjs/google-analytics', { id: 'UA-127484847-1'}],
    ['@nuxtjs/yandex-metrika', { id: '55277836', webvisor: true,}],
    ['vue-scrollto/nuxt', { duration: 500 }],
    '@nuxtjs/axios'
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: "mapbox-gl"
      }),
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
