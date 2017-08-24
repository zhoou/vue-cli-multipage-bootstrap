/**
 * Created by zhoou on 2016/11/30.
 */
const StatesModule = {
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {},
  getters: {}
}

export default StatesModule
