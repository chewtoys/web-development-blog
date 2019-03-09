/*
 ** Use axios to get routes
 */
import axios from 'axios'

/*
 ** Used for dynamic routing and sitemap
 */
const routes = function(callback) {
  axios
    .get('https://api.stevencotterill.com/wp-json/wdb/v1/routes')
    .then(res => {
      const routes = res.data.map(route => {
        return route
      })
      callback(null, routes)
    })
    .catch(callback)
}

export default {
  /*
   ** Server-side rendering
   */
  mode: 'universal',

  /*
   ** Global styles
   */
  css: ['~/assets/scss/bulma', '~/assets/scss/custom'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/globalComponents',
    '~/plugins/fontAwesome',
    '~/plugins/disqus',
    '~/plugins/vueScrollTo'
  ],

  /*
   ** Nuxt modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-111014684-1'
      }
    ],
    '@nuxtjs/sitemap'
  ],

  /*
   ** Axios module options
   */
  axios: {
    baseURL: 'https://api.stevencotterill.com/wp-json/wdb/v1/'
  },

  /*
   ** Build modern and legacy bundle
   ** Old browsers will use the legacy bundle
   */
  modern: 'client',

  /*
   ** Loading / progress bar
   */
  loading: false,

  /*
   ** @nuxtjs/pwa global meta overwrites
   */
  meta: {
    ogHost: 'https://stevencotterill.com',
    ogImage: '/social-share.png',
    theme_color: '#0366D6',
    ogSiteName: 'Steven Cotterill | Web Development Blog',
    twitterCard: 'summary',
    twitterSite: '@stevie_c91',
    twitterCreator: '@stevie_c91'
  },

  /*
   ** @nuxtjs/pwa global manifest overwrites
   */
  manifest: {
    name: 'Steven Cotterill - Web Development Blog',
    short_name: 'Web Dev Blog',
    theme_color: '#0366D6'
  },

  /*
   ** @nuxtjs/sitemap options
   */
  sitemap: {
    hostname: 'https://stevencotterill.com',
    generate: true,
    exclude: ['/thanks'],
    routes,
    fallback: true
  },

  /*
   ** Build options
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
   ** Dynamic routes during generation
   */
  generate: {
    routes
  }
}
