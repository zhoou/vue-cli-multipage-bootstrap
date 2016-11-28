/**
 * Created by zhoou on 2016/11/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import appCpm from './appCpm'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'

Vue.use(VueRouter)

const homeCpm = resolve => require(['./component/homeCpm'], resolve)
const startCpm = resolve => require(['./component/startCpm'], resolve)
const baseCpm = resolve => require(['./component/baseCpm'], resolve)
const improveCpm = resolve => require(['./component/improveCpm'], resolve)
const advanceCmp = resolve => require(['./component/advanceCmp'], resolve)
const vuexCpm = resolve => require(['./component/vuexCpm'], resolve)
const errorCpm = resolve => require(['components/Common/errorCpm'], resolve)

const baseUrl = '' // 多页面路径配置

const routes = [
  {path: baseUrl + '/', redirect: baseUrl + '/home'},
  {path: baseUrl + '/home', component: homeCpm},
  {path: baseUrl + '/startdemo', component: startCpm},
  {path: baseUrl + '/basedemo', component: baseCpm},
  {path: baseUrl + '/improvedemo', component: improveCpm},
  {path: baseUrl + '/advancedemo', component: advanceCmp},
  {path: baseUrl + '/vuex', component: vuexCpm},
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

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: page => page(appCpm)
})
