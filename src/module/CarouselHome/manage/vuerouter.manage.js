/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeCpm = r => require.ensure([], () => r(require('../component/homeCpm')), 'carousel_Home')
const bootCarousel = r => require.ensure([], () => r(require('../component/bootCarousel')), 'carousel_boot')
const vmaCarousel = r => require.ensure([], () => r(require('../component/vmaCarousel')), 'carousel_vma')
const errorCpm = r => require.ensure([], () => r(require('components/Common/vError')), 'error')

const baseUrl = '' // 多页面路径配置

const routes = [
  {path: baseUrl + '/', redirect: baseUrl + '/home'},
  {path: baseUrl + '/home', component: homeCpm},
  {path: baseUrl + '/bootstrapDemo', component: bootCarousel},
  {path: baseUrl + '/vmaDemo', component: vmaCarousel},
  {path: '*', component: errorCpm}
]

const router = new VueRouter({
  hashbang: true, // 将路径格式化为#!开头
  history: true, // use history=false when testing
  // mode: 'history',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
})

export default router
