/**
 * Created by zhoou on 2016/11/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import appCpm from './appCpm'
require('assets/css/bootstrap.min.css')
require('assets/css/Common.css')

Vue.use(VueRouter)

const homeCpm = resolve => require(['./component/homeCpm'], resolve)
const startCpm = resolve => require(['./component/startCpm'], resolve)
const baseCpm = resolve => require(['./component/baseCpm'], resolve)
const improveCpm = resolve => require(['./component/improveCpm'], resolve)
const advanceCmp = resolve => require(['./component/advanceCmp'], resolve)

const baseUrl = '' // 多页面路径配置

const routes = [
  {path: baseUrl + '/', redirect: baseUrl + '/home'},
  {path: baseUrl + '/home', component: homeCpm},
  {path: baseUrl + '/startdemo', component: startCpm},
  {path: baseUrl + '/basedemo', component: baseCpm},
  {path: baseUrl + '/improvedemo', component: improveCpm},
  {path: baseUrl + '/advancedemo', component: advanceCmp}
]

const router = new VueRouter({
  history: true, // use history=false when testing
  // mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: page => page(appCpm)
})

// router.push(baseUrl + '/home')
