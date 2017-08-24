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
    title: 'Vue2.0 Table Space 表格空间',
    urlItems: [
      {linkTo: '/home', name: 'Home'},
      {linkTo: '/basetable', name: '基础篇: base'},
      {
        linkTo: '/easytable',
        name: 'EasyTable',
        isDropdown: true,
        children: [
          {linkTo: '/etbase', name: 'Base'},
          {linkTo: '/columngroup', name: 'Column Group'},
          {linkTo: '/frozencolumns', name: 'Frozen Columns'},
          {linkTo: '/checkboxs', name: 'CheckBox Selection'},
          {linkTo: '/columnsort', name: 'Column Sort'},
          {linkTo: '/specialcolumn', name: 'Special Column'},
          {linkTo: '/customizecolumn', name: 'Customize Column'}
        ]
      }
    ]
  },
  getter: {}
})

export default store
