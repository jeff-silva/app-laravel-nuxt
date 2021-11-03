const { join } = require('path');
const { copySync, removeSync, rename } = require('fs-extra');
require('dotenv').config();

let u = new URL(process.env.CLIENT_URL || 'http://localhost:3000');

export default {
  srcDir: 'client',

  server: {host:u.hostname, port:u.port},

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
		APP_NAME: process.env.APP_NAME,
		APP_DESCRIPTION: process.env.APP_DESCRIPTION,
		APP_URL: process.env.APP_URL,
		CLIENT_URL: process.env.CLIENT_URL,
	},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app-laravel-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/app.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios', {
      proxy: true,
    }],

    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', {}],

    // https://go.nuxtjs.dev/content
    ['@nuxt/content', {}],
    
    // https://auth.nuxtjs.org/
    ['@nuxtjs/auth-next', {
      // https://dev.auth.nuxtjs.org/api/options#redirect
      redirect: {
        login: '/auth',
        logout: '/',
        callback: false,
        home: false,
      },

      strategies: {
        // https://dev.auth.nuxtjs.org/providers/laravel-jwt
        // https://github.com/nuxt-community/auth-module/blob/dev/src/providers/laravel/jwt/index.ts
        'jwt': {
          provider: 'laravel/jwt',
          url: '/',
          name: 'jwt',
          endpoints: {
            login: {method:'POST', url:'/api/login'},
            refresh: {method:'POST', url:'/api/refresh'},
            logout: {method:'POST', url:'/api/logout'},
            user: {method:'POST', url:'/api/me'},
          },
          token: {
            property: 'access_token',
            maxAge: (60 * 60),
          },
          refreshToken: {
            maxAge: (20160 * 60),
          },
        },
      },
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  proxy: {
    '/api/': process.env.APP_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],

    extend(config, ctx) {
			config.resolve.alias['vue'] = 'vue/dist/vue.common';
		},
  },

  hooks: {
    generate: {
      done (generator) {
        const publicDir = join(__dirname, 'public');
        removeSync(join(publicDir, '_nuxt'));
        removeSync(join(publicDir, 'dev'));
        copySync(generator.nuxt.options.generate.dir, publicDir);
        rename(join(publicDir, 'index.html'), join(publicDir, 'app.html'));
        removeSync(generator.nuxt.options.generate.dir);
      },
    },
  }
}
