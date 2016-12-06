/**
 * Created by zhoou on 2016/12/6.
 */
/**
 * Created by zhoou on 2016/11/30.
 */
import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'

import IndexCpm from './IndexCpm.vue'
import store from './manage/vuex.manage'
import router from './manage/vuerouter.manage'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

new Vue({ // eslint-disable-line no-new
  el: '#popuphome',
  store,
  router,
  render: page => page(IndexCpm)
})

