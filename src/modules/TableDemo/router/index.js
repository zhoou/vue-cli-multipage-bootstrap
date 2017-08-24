/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeCpm = r => require.ensure([], () => r(require('../component/homeCpm')), 'Table_Home')
const baseTable = r => require.ensure([], () => r(require('../component/baseTable')), 'Table_Base')
const etbase = r => require.ensure([], () => r(require('../component/easyTable')), 'Table_easy')
const complexTitle = r => require.ensure([], () => r(require('../component/eTColumnGroup')), 'easyTable_columngroup')
const frozenColumns = r => require.ensure([], () => r(require('../component/eTFrozenColumns')), 'easyTable_frozencolumns')
const checkboxs = r => require.ensure([], () => r(require('../component/eTCheckBoxSelection')), 'easyTable_checkbox')
const columnSort = r => require.ensure([], () => r(require('../component/eTColumnSort')), 'easyTable_columnsort')
const specialColumn = r => require.ensure([], () => r(require('../component/eTSpecialColumn')), 'easyTable_specialColumn')
const customizeColumn = r => require.ensure([], () => r(require('../component/eTCustomizeColumn')), 'easyTable_customizeColumn')
const errorCpm = r => require.ensure([], () => r(require('components/Common/vError')), 'error')

const baseUrl = '' // 多页面路径配置

const et = {
  template: '<router-view keep-alive></router-view>'
}

const routes = [
  {path: baseUrl + '/', redirect: baseUrl + '/home'},
  {path: baseUrl + '/home', component: homeCpm},
  {path: baseUrl + '/basetable', component: baseTable},
  {
    path: baseUrl + '/easytable',
    component: et,
    children: [
      {path: 'etbase', component: etbase},
      {path: 'columngroup', component: complexTitle},
      {path: 'frozencolumns', component: frozenColumns},
      {path: 'checkboxs', component: checkboxs},
      {path: 'columnsort', component: columnSort},
      {path: 'specialcolumn', component: specialColumn},
      {path: 'customizecolumn', component: customizeColumn}
    ]},
  {path: '*', component: errorCpm}
]

const router = new VueRouter({
  hashbang: true, // 将路径格式化为#!开头
  history: true, // use history=false when testing
  // mode: 'history',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
})

export default router
