import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c3caf2b8 = () => interopDefault(import('..\\client\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _b86b1744 = () => interopDefault(import('..\\client\\pages\\dev\\index.vue' /* webpackChunkName: "pages/dev/index" */))
const _d7684b38 = () => interopDefault(import('..\\client\\pages\\dev\\index\\index.vue' /* webpackChunkName: "pages/dev/index/index" */))
const _930a45f4 = () => interopDefault(import('..\\client\\pages\\dev\\index\\auth.vue' /* webpackChunkName: "pages/dev/index/auth" */))
const _53de8410 = () => interopDefault(import('..\\client\\pages\\dev\\index\\endpoints.vue' /* webpackChunkName: "pages/dev/index/endpoints" */))
const _2bd1a07c = () => interopDefault(import('..\\client\\pages\\dev\\index\\example.vue' /* webpackChunkName: "pages/dev/index/example" */))
const _77041189 = () => interopDefault(import('..\\client\\pages\\dev\\index\\files.vue' /* webpackChunkName: "pages/dev/index/files" */))
const _480c4aa1 = () => interopDefault(import('..\\client\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _5dd9bc21 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _c3caf2b8,
    name: "admin"
  }, {
    path: "/dev",
    component: _b86b1744,
    children: [{
      path: "",
      component: _d7684b38,
      name: "dev-index"
    }, {
      path: "auth",
      component: _930a45f4,
      name: "dev-index-auth"
    }, {
      path: "endpoints",
      component: _53de8410,
      name: "dev-index-endpoints"
    }, {
      path: "example",
      component: _2bd1a07c,
      name: "dev-index-example"
    }, {
      path: "files",
      component: _77041189,
      name: "dev-index-files"
    }]
  }, {
    path: "/admin/settings",
    component: _480c4aa1,
    name: "admin-settings"
  }, {
    path: "/",
    component: _5dd9bc21,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
