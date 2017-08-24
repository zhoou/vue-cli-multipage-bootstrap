/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [logger],
  state: {
    title: 'Vue2.0 从入门到精通效果展示',
    urlItems: [
      {linkTo: '/home', name: 'Home'},
      {linkTo: '/logindemo', name: 'Login Demo'}
    ]
  }
})

export default store
