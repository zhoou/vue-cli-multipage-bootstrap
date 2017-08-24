/**
 * Created by zhoou on 2016/11/30.
 */
import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'
import 'assets/css/table.css'

import IndexCpm from './IndexCpm.vue'
import store from './store'
import router from './router'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

/* eslint-disable*/
new Vue({
    el: '#tablehome',
    store,
    router,
    render: page => page(IndexCpm)
})