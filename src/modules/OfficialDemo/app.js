/**
 * Created by zhoou on 2016/11/24.
 */
import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'
import 'assets/css/hljs.css'

import VApp from './app.vue'
import store from './store'
import router from './router'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

import demoBox from './component/DemoBox.vue'
Vue.component('demo-box', demoBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: page => page(VApp)
})
