/**
 * Created by zhoou on 2016/11/30.
 */
const GettersModule = {
  state: {
    todos: [
      {id: 1, text: 'vue', done: true},
      {id: 2, text: 'vue-router', done: false},
      {id: 3, text: 'vuex', done: true}
    ]
  },
  getters: {
    doneTodosCount (state) {
      return state.todos.filter(item => item.done)
    }
  },
  mutations: {},
  actions: {}
}

export default GettersModule
