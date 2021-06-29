import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c9776fd4 = () => interopDefault(import('../pages/galereya.vue' /* webpackChunkName: "pages/galereya" */))
const _71452dbe = () => interopDefault(import('../pages/kontakty.vue' /* webpackChunkName: "pages/kontakty" */))
const _1b7508aa = () => interopDefault(import('../pages/o-nas.vue' /* webpackChunkName: "pages/o-nas" */))
const _4f69366f = () => interopDefault(import('../pages/otzyvy.vue' /* webpackChunkName: "pages/otzyvy" */))
const _6844198a = () => interopDefault(import('../pages/sobytiya/index.vue' /* webpackChunkName: "pages/sobytiya/index" */))
const _0a77b954 = () => interopDefault(import('../pages/uslugi/index.vue' /* webpackChunkName: "pages/uslugi/index" */))
const _d994ef3a = () => interopDefault(import('../pages/sobytiya/_id.vue' /* webpackChunkName: "pages/sobytiya/_id" */))
const _0d8c00bc = () => interopDefault(import('../pages/uslugi/_id.vue' /* webpackChunkName: "pages/uslugi/_id" */))
const _0fbb4a8c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/galereya",
    component: _c9776fd4,
    name: "galereya"
  }, {
    path: "/kontakty",
    component: _71452dbe,
    name: "kontakty"
  }, {
    path: "/o-nas",
    component: _1b7508aa,
    name: "o-nas"
  }, {
    path: "/otzyvy",
    component: _4f69366f,
    name: "otzyvy"
  }, {
    path: "/sobytiya",
    component: _6844198a,
    name: "sobytiya"
  }, {
    path: "/uslugi",
    component: _0a77b954,
    name: "uslugi"
  }, {
    path: "/sobytiya/:id",
    component: _d994ef3a,
    name: "sobytiya-id"
  }, {
    path: "/uslugi/:id",
    component: _0d8c00bc,
    name: "uslugi-id"
  }, {
    path: "/",
    component: _0fbb4a8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
