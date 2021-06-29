import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a66a9b10 = () => interopDefault(import('../pages/galereya.vue' /* webpackChunkName: "pages/galereya" */))
const _4e3858fa = () => interopDefault(import('../pages/kontakty.vue' /* webpackChunkName: "pages/kontakty" */))
const _0c78ecf0 = () => interopDefault(import('../pages/o-nas.vue' /* webpackChunkName: "pages/o-nas" */))
const _3aead151 = () => interopDefault(import('../pages/otzyvy.vue' /* webpackChunkName: "pages/otzyvy" */))
const _94e0e7c6 = () => interopDefault(import('../pages/sobytiya/index.vue' /* webpackChunkName: "pages/sobytiya/index" */))
const _77c3ba94 = () => interopDefault(import('../pages/uslugi/index.vue' /* webpackChunkName: "pages/uslugi/index" */))
const _4cdbf1c5 = () => interopDefault(import('../pages/sobytiya/_id.vue' /* webpackChunkName: "pages/sobytiya/_id" */))
const _51bd4ac4 = () => interopDefault(import('../pages/uslugi/_id.vue' /* webpackChunkName: "pages/uslugi/_id" */))
const _531e48d0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a66a9b10,
    name: "galereya"
  }, {
    path: "/kontakty",
    component: _4e3858fa,
    name: "kontakty"
  }, {
    path: "/o-nas",
    component: _0c78ecf0,
    name: "o-nas"
  }, {
    path: "/otzyvy",
    component: _3aead151,
    name: "otzyvy"
  }, {
    path: "/sobytiya",
    component: _94e0e7c6,
    name: "sobytiya"
  }, {
    path: "/uslugi",
    component: _77c3ba94,
    name: "uslugi"
  }, {
    path: "/sobytiya/:id",
    component: _4cdbf1c5,
    name: "sobytiya-id"
  }, {
    path: "/uslugi/:id",
    component: _51bd4ac4,
    name: "uslugi-id"
  }, {
    path: "/",
    component: _531e48d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
