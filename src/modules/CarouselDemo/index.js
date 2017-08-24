/**
 * Created by zhoou on 2016/12/7.
 */
import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'

import IndexCpm from './Index.vue'
import store from './store'
import router from './router'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

/* eslint-disable*/
new Vue({
    el: '#carousel',
    store,
    router,
    render: page => page(IndexCpm)
})