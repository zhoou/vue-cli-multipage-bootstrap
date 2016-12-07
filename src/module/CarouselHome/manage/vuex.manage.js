/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import logger from './logger.manage'  // 记录日志 ：logger 插件会生成状态快照，所以仅在开发环境使用。

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [logger],
  state: {
    title: 'Vue2.0 Carousel Space 轮播空间走廊',
    urlItems: [
      {linkTo: '/home', name: 'Home'},
      {linkTo: '/bootstrapDemo', name: 'Bootstrap 轮播'},
      {linkTo: '/vmaDemo', name: '轮播：类型A'},
      {linkTo: '/vmbDemo', name: '轮播：类型B'},
      {linkTo: '/vmcDemo', name: '轮播：类型C'}
    ]
  },
  modules: {

  }
})

export default store
