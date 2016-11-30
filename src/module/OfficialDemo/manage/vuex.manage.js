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
    actionsData: {
      numOne: 0,
      numTwo: 0,
      result: '请输入结果哦！'
    },
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
      state.mutations_result = 1 + payload.num
    },
    mutaCalculationAsync (state, payload) {
      state.actionsData.result = payload.answer === 'T' ? 'Good!' : 'Sorry!'
    },
    mutaClearResult (state) {
      state.actionsData.result = ''
    }
  },
  // 可以认为是 store 的计算属性
  getters: {
    doneTodosCount: state => {
      return state.getters_todos.filter(item => item.done)
    },
    getNumOne: state => {
      return state.actionsData.numOne + Math.floor(Math.random() * 10 + 1)
    },
    getNumTwo: state => {
      return state.actionsData.numTwo + Math.floor(Math.random() * 10 + 1)
    }
  },
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  actions: {
    clearResult ({commit}) {
      commit('mutaClearResult')
    },
    CalculationAsync ({ commit }, answer) {
      return store.dispatch('clearResult').then(() => {
        setTimeout(() => {
          commit('mutaCalculationAsync', answer)
        }, 500)
      })
    }
  }
})

export default store
