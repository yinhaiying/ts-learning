import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        text: "typescript",
        complete: false,
      },
      {
        text: "flutter",
        complete: false,
      },
    ]
  },
  mutations: {
    updateTodoList(state,{index, content}) {
      state.todoList[index].text = content;
    }
  },
  actions: {
  },
  modules: {
  }
})
