import Vue from 'vue'
import VueRouter from 'vue-router'

import indexCpm from './IndexCpm'
require('assets/css/bootstrap.min.css')
require('assets/css/Common.css')

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: require('../Index/IndexCpm') },
  { path: '/startdemo', component: require('../Start/startCpm') },
  { path: '/basedemo', component: require('../Base/baseCpm') },
  { path: '/improvedemo', component: require('../Improve/improveCpm') },
  { path: '/advancedemo', component: require('../Advance/advanceCmp') }
]

const router = new VueRouter({
  history: true, // use history=false when testing
  mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

new Vue({ // eslint-disable-line no-new
  router,
  template: '<indexCpm />',
  components: {indexCpm}
}).$mount('#home')
