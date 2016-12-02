/**
 * Created by zhoou on 2016/11/24.
 */
import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'
import 'assets/css/hljs.css'

import appCpm from './appCpm'
import store from './manage/vuex.manage'
import router from './manage/vuerouter.manage'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render: page => page(appCpm)
})
