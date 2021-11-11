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
const _61e980b5 = () => interopDefault(import('..\\client\\pages\\dev\\index\\nav.vue' /* webpackChunkName: "pages/dev/index/nav" */))
const _fe5a846e = () => interopDefault(import('..\\client\\pages\\admin\\files.vue' /* webpackChunkName: "pages/admin/files" */))
const _8029c27e = () => interopDefault(import('..\\client\\pages\\admin\\settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _480c4aa1 = () => interopDefault(import('..\\client\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _12de0f2a = () => interopDefault(import('..\\client\\pages\\admin\\settings\\email.vue' /* webpackChunkName: "pages/admin/settings/email" */))
const _2dbc35cc = () => interopDefault(import('..\\client\\pages\\admin\\settings\\user.vue' /* webpackChunkName: "pages/admin/settings/user" */))
const _6e3bab30 = () => interopDefault(import('..\\client\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _e770b260 = () => interopDefault(import('..\\client\\pages\\admin\\users\\_id.vue' /* webpackChunkName: "pages/admin/users/_id" */))
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
    }, {
      path: "nav",
      component: _61e980b5,
      name: "dev-index-nav"
    }]
  }, {
    path: "/admin/files",
    component: _fe5a846e,
    name: "admin-files"
  }, {
    path: "/admin/settings",
    component: _8029c27e,
    children: [{
      path: "",
      component: _480c4aa1,
      name: "admin-settings"
    }, {
      path: "email",
      component: _12de0f2a,
      name: "admin-settings-email"
    }, {
      path: "user",
      component: _2dbc35cc,
      name: "admin-settings-user"
    }]
  }, {
    path: "/admin/users",
    component: _6e3bab30,
    name: "admin-users"
  }, {
    path: "/admin/users/:id",
    component: _e770b260,
    name: "admin-users-id"
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
