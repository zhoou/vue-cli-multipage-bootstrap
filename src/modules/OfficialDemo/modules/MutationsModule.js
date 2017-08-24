/**
 * Created by zhoou on 2016/11/30.
 */
const MutationsModule = {
  state: {
    result: 1
  },
  mutations: {
    Calculation (state, payload) {
      state.result = 1 + payload.num
    }
  },
  actions: {},
  getters: {}
}

export default MutationsModule
