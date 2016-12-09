/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

// import logger from './logger.manage'  // 记录日志 ：logger 插件会生成状态快照，所以仅在开发环境使用。

import StatesModule from '../modules/StatesModule'
import GettersModule from '../modules/GettersModule'
import MutationsModule from '../modules/MutationsModule'
import ActionsModule from '../modules/ActionsModule'
import ExamplesModule from '../modules/ExamplesModule'
import AdvanceModule from '../modules/AdvanceModule'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  // plugins: [logger],
  state: {
    title: 'Vue2.0 从入门到精通效果展示',
    urlItems: [
      {linkTo: '/home', name: 'Home'},
      {linkTo: '/startdemo', name: '入门篇: start'},
      {linkTo: '/basedemo', name: '基础篇: base'},
      {linkTo: '/improvedemo', name: '提高篇：improve'},
      {linkTo: '/advancedemo', name: '进阶篇：advance'},
      {linkTo: '/vuerouter', name: 'vue-router'},
      {linkTo: '/vueresource', name: 'vue-resource'},
      {linkTo: '/vuex', name: 'Vuex'},
      {linkTo: '/examples', name: '案例：Examples'}
    ]
  },
  modules: {
    stateDemo: StatesModule,
    getterDemo: GettersModule,
    mutationDemo: MutationsModule,
    actionDemo: ActionsModule,
    exampleDemo: ExamplesModule,
    advanceDemo: AdvanceModule
  }
})

export default store
