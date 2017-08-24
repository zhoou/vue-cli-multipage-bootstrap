/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeCpm = r => require.ensure([], () => r(require('../component/homeCpm')), 'Official_Home')
const startCpm = r => require.ensure([], () => r(require('../component/startCpm')), 'Official_Start')
const baseCpm = r => require.ensure([], () => r(require('../component/baseCpm')), 'Official_Base')
const improveCpm = r => require.ensure([], () => r(require('../component/improveCpm')), 'Official_Improve')
const advanceCpm = r => require.ensure([], () => r(require('../component/advanceCmp')), 'Official_Advance')
const vueResource = r => require.ensure([], () => r(require('../component/vueResource')), 'Official_vueResource')
const vuexCpm = r => require.ensure([], () => r(require('../component/vuexCpm')), 'Official_Vuex')
const exampleCpm = r => require.ensure([], () => r(require('../component/exampleCpm')), 'Official_Example')
const errorCpm = r => require.ensure([], () => r(require('components/Common/vError')), 'error')

const baseUrl = '' // 多页面路径配置

const routes = [
  {path: baseUrl + '/', redirect: baseUrl + '/home'},
  {path: baseUrl + '/home', component: homeCpm},
  {path: baseUrl + '/startdemo', component: startCpm},
  {path: baseUrl + '/basedemo', component: baseCpm},
  {path: baseUrl + '/improvedemo', component: improveCpm},
  {path: baseUrl + '/advancedemo', component: advanceCpm},
  {path: baseUrl + '/vueresource', component: vueResource},
  {path: baseUrl + '/vuex', component: vuexCpm},
  {path: baseUrl + '/examples', component: exampleCpm},
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
