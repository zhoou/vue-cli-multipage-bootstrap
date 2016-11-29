/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countApp_count: 0,
    mutations_result: 1,
    getters_todos: [
      { id: 1, text: 'vue', done: true },
      { id: 2, text: 'vue-router', done: false },
      { id: 3, text: 'vuex', done: true }
    ]
  },
  mutations: {
    countApp_increment: state => state.countApp_count++,
    countApp_decrement: state => state.countApp_count--,
    mutations_Calculation (state, payload) {
      console.log(payload)
      state.mutations_result = 1 + payload.num
    }
  },
  getters: {  // 可以认为是 store 的计算属性
    doneTodosCount: state => {
      return state.getters_todos.filter(item => item.done)
    }
  },
  actions: {
    // coding
  }
})

export default store
