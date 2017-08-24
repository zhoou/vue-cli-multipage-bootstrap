/**
 * Created by zhoou on 2016/12/14.
 */

import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'

import formCpm from './formCpm'
import store from './store'
import router from './router'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

/* eslint-disable*/
new Vue({
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