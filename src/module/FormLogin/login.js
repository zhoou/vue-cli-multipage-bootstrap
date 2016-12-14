/**
 * Created by zhoou on 2016/12/14.
 */

import Vue from 'vue'
import VueValidate from 'vue-validator'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'

import formCpm from './formCpm'
import store from './manage/vuex.manage'
import router from './manage/vuerouter.manage'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

Vue.use(VueValidate)

new Vue({ // eslint-disable-line no-new
  el: '#login',
  store,
  router,
  render: page => page(formCpm),
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})
