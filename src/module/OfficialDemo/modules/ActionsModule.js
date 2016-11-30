/**
 * Created by zhoou on 2016/11/30.
 */
import store from '../manage/vuex.manage'

const ActionsModule = {
  state: {
    numOne: 0,
    numTwo: 0,
    result: '请输入结果哦！'
  },
  mutations: {
    CalculationAsync (state, payload) {
      state.result = payload.answer === 'T' ? 'Good!' : 'Sorry!'
    },
    ClearResult (state) {
      state.result = ''
    }
  },
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  actions: {
    clearResult: ({commit}) => commit('ClearResult'),
    CalculationAsync ({commit}, answer) {
      return store.dispatch('clearResult').then(() => {
        setTimeout(() => {
          commit('CalculationAsync', answer)
        }, 500)
      })
    }
  },
  // 可以认为是 store 的计算属性
  getters: {
    getNumOne: state => {
      return state.numOne + Math.floor(Math.random() * 10 + 1)
    },
    getNumTwo: state => {
      return state.numTwo + Math.floor(Math.random() * 10 + 1)
    }
  }
}

export default ActionsModule
